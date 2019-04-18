import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import ReactMarkdown from 'react-markdown'
import * as R from 'ramda'

import Example from './Example.jsx'

const Script = styled.p`
  background: red;
`

const Code = styled.code`
  background: orange;
`

const Strong = styled.strong`
  color: black;
  font-width: bold;
`

const Title = styled.p``

const Notation = styled.div`
  display: inline-block;
  background: grey;
  padding: 8px 16px;
  color: white;
  border-radius: 4px;
`

const Section = styled.div`
  display: flex;
`

const SectionHeader = styled.div``
const SectionContent = styled.div``
const Column = styled.div`
flex: 1;
`

const Solution = ({ data }) => {
  return (
      <Section>
      <Column>
        <SectionHeader>
          <Title>{data.name}</Title>
            <Fragment>
              <a target='_blank' rel='noopener noreferrer' href={data.resource}>
                {data.resource}
              </a>
            </Fragment>
        </SectionHeader>
          <SectionContent>
            <Notation>{data.notation}</Notation>
            <br />
            <ReactMarkdown
              renderers={{
                code: ({ children }) => <Script>{children}</Script>,
                inlineCode: ({ children }) => <Code>{children}</Code>,
                strong: ({ children }) => <Strong>{children}</Strong>
              }}
              source={data.description}
            />
          </SectionContent>
          </Column>
          <Column>
        {R.hasPath(['example'], data) && <Example data={data.example} />}
          </Column>
      </Section>
  )
}

export default Solution
