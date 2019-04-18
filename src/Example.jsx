import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import Highlight, { defaultProps } from 'prism-react-renderer'

const Output = styled.span``

const Example = ({ data }) => {
  return (
    <Fragment>
      {data.code && (
        <Highlight {...defaultProps} code={data.code} language='js'>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
              {data.output && <Output>{data.output}</Output>}
            </pre>
          )}
        </Highlight>
      )}
    </Fragment>
  )
}

export default Example
