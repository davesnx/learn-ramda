import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import Solution from './Solution.jsx'

const Root = styled.div`
  > * + * {
    margin: 20px 0px;
  }
`

const Solutions = ({ data }) => {
  if (!data || !data.func) {
    return null
  }

  return (
    <Root>
      {data.func.map((func, index) => {
        return (
          <Fragment key={index}>
            <Solution data={func} />
          </Fragment>
        )
      })}
    </Root>
  )
}

export default Solutions
