import React, { Suspense, Fragment, useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from 'emotion'
import Select from 'react-select'
import * as R from 'ramda'

import colors from './colors.js'
import { slug, unslug } from './lib/slug'
import RamdaIcon from './icons/ramda.jsx'
import Solutions from './Solutions.jsx'

const fadeUp = keyframes`
  0%  {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Header = styled.div`
  padding: 8vh 8vw 12vh;
`

const SelectWrapper = styled.div`
  min-width: 200px;
  margin: 0 20px;
`

const SelectWrapperBig = styled.div`
  flex: 1;
  min-width: 320px;
  margin-left: 20px;
`

const Sentence = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 24px;
  line-height: 1.25;
`

const Description = styled.div`
  opacity: 0.6;
  font-size: 12px;
  margin-bottom: 3vh;
`

const Content = styled.main`
  padding: 8vh 8vw 15vh;
  background-color: rgba(0, 0, 0, 0.03);
  animation: ${fadeUp} 500ms cubic-bezier(0.175, 0.885, 0.32, 1.15);
`

const customStyles = {
  indicatorSeparator: () => ({
    display: 'none'
  })
}

const theme = (theme) => ({
  ...theme,
  colors: {
    ...theme.colors,
    primary: colors.black,
    primary75: colors.grey,
    primary50: colors.grey,
    primary25: colors.grey
  }
})

const App = props => {
  const {
    data,
    match: { params },
    history
  } = props

  const types = R.uniq(R.map(R.prop('type'), data))
  const typeOptions = R.map(v => ({ label: v }), types)

  const [type, setType] = useState({ label: params.type })
  const [action, setAction] = useState({
    label: params.action && unslug(params.action)
  })

  const actionsByType = R.filter(R.propEq('type', type.label), data)
  const actionOptions = R.map(v => ({ label: v.action, ...v }), actionsByType)

  const typeSelected = type && R.length(actionsByType) !== 0
  const actionSelected = action && R.length(actionsByType) !== 0

  const optionAction = R.find(a => a.label === action.label, actionOptions)

  return (
    <Fragment>
    <Header>
      <Description>
        Find the right method you need in Ramda <RamdaIcon />
      </Description>
      <Sentence>
        I have a
        <SelectWrapper>
          <Select
            openMenuOnFocus
            styles={customStyles}
            isOptionSelected={option => option === type}
            autoFocus={!typeSelected}
            placeholder='Select type'
            onChange={option => {
              setAction({})
              setType(option)
              history.push('/' + option.label)
            }}
            options={typeOptions}
            value={type}
            theme={theme}
          />
        </SelectWrapper>
        {typeSelected && (
          <Fragment>
            I would like to
            <SelectWrapperBig>
              <Select
                styles={customStyles}
                autoFocus={typeSelected && !actionSelected}
                isOptionSelected={option => option === action}
                placeholder='Select an action'
                options={actionOptions}
                onChange={option => {
                  history.push('/' + params.type + '/' + slug(option.label))
                  setAction(option)
                }}
                value={action}
                theme={theme}
              />
            </SelectWrapperBig>
          </Fragment>
        )}
      </Sentence>
    </Header>
    {optionAction && (
      <Suspense fallback={<div>Loading...</div>}>
      <Content>
        <Solutions data={optionAction} />
      </Content>
      </Suspense>
    )}
    </Fragment>
  )
}

export default App
