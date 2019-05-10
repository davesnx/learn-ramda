import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const Pre = styled.pre`
  margin: 0;
  border-radius: 8px;
  box-shadow:
    rgba(0, 0, 0, 0.8) 0px 20px 40px -25px,
    rgba(0, 0, 0, 0.1) 0px 20px 40px   0px;
`

const Example = ({ data }) => {
  return (
    <Fragment>
      {data.code && (
        <Highlight {...defaultProps} code={data.code} language='js' theme={theme} >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
              {data.output && <div>{data.output}</div>}
            </Pre>
          )}
        </Highlight>
      )}
    </Fragment>
  )
}

export default Example
