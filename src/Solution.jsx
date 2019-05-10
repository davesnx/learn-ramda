import React  from 'react'
import styled from '@emotion/styled'
import * as R from 'ramda'
import { keyframes } from 'emotion'
import ReactMarkdown from 'react-markdown'

import colors from './colors'
import Example from './Example.jsx'

const fadeUp = keyframes`
  0%  {
    transform: translate3d(0,40px,0);
    opacity: 0;
  }

  100% {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
`
const scaleCenter = keyframes`
  0%  {
    transform: scale(0.9);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`

const Script = styled.p`
  background-color: ${colors.grey};
`

const Code = styled.code`
  background-color: ${colors.grey};
  padding: 2px 4px;
  margin: 0 -2px;
  border-radius: 2px;
`

const Strong = styled.strong`
  color: black;
  font-weight: bold;
`

const Title = styled.h1`
  margin-top: 0;
  text-transform: capitalize;
`

const Link = styled.a`
  display: block;
  margin-bottom: 16px;
`

const Notation = styled.div`
  display: inline-block;
  padding: 6px 14px;
  border-radius: 2px;
  background-color: ${colors.grey};
  margin-bottom: 24px;
`

const Section = styled.div`
  display: flex;
`

const SectionContent = styled.div`
  margin-right: 5vw;
  flex: 1;
  animation: ${fadeUp} 500ms cubic-bezier(0.175, 0.885, 0.32, 1.15);
`

const SectionCode = styled.div`
  flex: 1;

  & > pre {
    padding: 12px 0;

    animation: ${scaleCenter} 500ms cubic-bezier(0.175, 0.885, 0.32, 1.15);
    transform-origin: center center;
  }
`

const Solution = ({ data }) => {
  return (
      <Section>
        <SectionContent>
          <Title>{data.name}</Title>
          <Link target='_blank' rel='noopener noreferrer' href={data.resource} >
            {data.resource}
          </Link>
          {data.notation && <Notation>{data.notation}</Notation>}
          <ReactMarkdown
            renderers={{
              code: ({ children }) => <Script>{children}</Script>,
              inlineCode: ({ children }) => <Code>{children}</Code>,
              strong: ({ children }) => <Strong>{children}</Strong>
            }}
            source={data.description}
          />
        </SectionContent>
        <SectionCode>
          {R.hasPath(['example'], data) && <Example data={data.example} />}
        </SectionCode>
    </Section>
  )
}

export default Solution
