import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'
import Select from 'react-select'
import Heading from '@kiwicom/orbit-components/lib/Heading'
import Button from '@kiwicom/orbit-components/lib/Button'
import ShareIcon from '@kiwicom/orbit-components/lib/icons/ShareIos'
import copy from 'copy-to-clipboard'
import * as R from 'ramda'

import colors from './colors.js'
import Solutions from './Solutions.jsx'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 30vh;
  max-height: 120px;

  background-color: ${colors.white};
`

const Content = styled.main`
  padding: 50px;
  overflow-y: scroll;
  background-color: ${colors.black};
`

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
      <Heading type='title2' element='p'>
        I have a
      </Heading>
      <Select
        openMenuOnFocus
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
          <Heading type='title2' element='p'>
            I would like to
          </Heading>
          <Select
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
