import React from 'react'
import styled from '@emotion/styled'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const Root = styled.div`
  .prism-code {
    max-width: 40vw;

    @media (max-width: 600px) {
      max-width: unset;
      width: calc(100% - 8vw);
    }

    overflow-y: scroll;
    padding: 12px 0px;
  }
`

const Pre = styled.pre`
  margin: 0;
  border-radius: 8px;
  box-shadow:
    rgba(0, 0, 0, 0.8) 0px 20px 40px -25px,
    rgba(0, 0, 0, 0.1) 0px 20px 40px   0px;
`

const Example = ({ data }) => {
  return (
    <Root>
      {data && (
        <Highlight {...defaultProps} code={data} language='js' theme={theme} >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </Pre>
          )}
        </Highlight>
      )}
    </Root>
  )
}

export default Example
