import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import Text from '@kiwicom/orbit-components/lib/Text'
import Card, {
  CardHeader,
  CardSection,
  CardSectionContent
} from '@kiwicom/orbit-components/lib/Card'
import Heading from '@kiwicom/orbit-components/lib/Heading'
import Highlight, { defaultProps } from 'prism-react-renderer'
import * as R from 'ramda'
import Types from './data'

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

const Solution = ({ data }) => {
  return (
    <Fragment>
      <Card>
        <CardHeader title={data.name} subTitle={data.resource} />
        <CardSection>
          <CardSectionContent>
            <Heading type='title3' element='h3'>
              {data.notation}
            </Heading>
            <Text>{data.description}</Text>
          </CardSectionContent>
        </CardSection>
        {R.hasPath(['example'], data) && <Example data={data.example} />}
      </Card>
    </Fragment>
  )
}

const App = ({ data = Types }) => {
  const types = R.uniq(R.map(R.prop('type'), data))
  const typeOptions = R.map((v, i) => ({ value: i, label: v }), types)

  const [type, setType] = useState('')
  const [action, setAction] = useState('')

  const actionsByType = R.filter(R.propEq('type', type && type.label), data)
  const actionOptions = R.map(
    (v, i) => ({ value: i, label: v.action, ...v }),
    actionsByType
  )

  const typeSelected = type && R.length(actionsByType)

  return (
    <Fragment>
      <Heading type='title2' element='p'>
        I have a
      </Heading>
      <Select
        placeholder='Select type'
        options={typeOptions}
        onChange={o => setType(o)}
      />
      {typeSelected && (
        <Fragment>
          <br />
          <Heading type='title2' element='p'>
            I would like to
          </Heading>
          <Select
            placeholder='Select an action'
            options={actionOptions}
            onChange={o => setAction(o)}
          />
          <br />
          {action &&
            action.func &&
            action.func.map((func, index) => {
              return (
                <Fragment>
                  <Solution key={index} data={func} />
                  <br />
                </Fragment>
              )
            })}
        </Fragment>
      )}
    </Fragment>
  )
}
export default App
