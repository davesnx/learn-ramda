import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import Select from 'react-select'
import Button from '@kiwicom/orbit-components/lib/Button'
import ShareIcon from '@kiwicom/orbit-components/lib/icons/ShareIos'
import copy from 'copy-to-clipboard'
import * as R from 'ramda'

import colors from './colors.js'
import Solutions from './Solutions.jsx'

const Header = styled.header`
  margin: 15vh 8vw 15vh;  
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  font-size: 32px;
  line-height: 1.25;
`

const Content = styled.main`
  padding: 50px;
  background-color: #ededed;
`

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'red' : 'blue',
  }),
  control: (provided) => ({
    // none of react-select's styles are passed to <Control />
    ...provided,
    width: 200,
    marginLeft: 20,
    marginRight: 20,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
}

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
    label: params.action
  })

  const actionsByType = R.filter(R.propEq('type', type.label), data)
  const actionOptions = R.map(v => ({ label: v.action, ...v }), actionsByType)

  const typeSelected = type && R.length(actionsByType) !== 0
  const actionSelected = action && R.length(actionsByType) !== 0

  const optionAction = R.find(a => a.label === action.label, actionOptions)

  return (
    <Fragment>
    <Header>
      I have a
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
      />
      {typeSelected && (
        <Fragment>
          I would like to
          <Select
            styles={customStyles}
            autoFocus={typeSelected && !actionSelected}
            isOptionSelected={option => option === action}
            placeholder='Select an action'
            options={actionOptions}
            onChange={option => {
              history.push('/' + params.type + '/' + option.label)
              setAction(option)
            }}
            value={action}
          />
          </Fragment>
      )}
      </Header>
      <Content>
        {optionAction && (
          <Fragment>
          <Solutions data={optionAction} />
          <Button
            iconLeft={<ShareIcon />}
            onClick={() => copy(window.location.href)}
          >
            Share
          </Button>
          </Fragment>
        )}
      </Content>
    </Fragment>
  )
}

export default App
