import React, { Fragment } from 'react'
import { render } from 'react-dom'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import data from './data'
import { Global, css } from '@emotion/core'
import colors from './colors.js'



const normalize = css`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,600');

  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'IBM Plex Mono', monospace;
    margin: 0;
    padding: 0;
  }
`

render(
  <Fragment>
  <Global styles={normalize}/>
  <BrowserRouter hashType='noslash'>
    <Route
      path='/:type?/:action?'
      render={props => <App data={data} {...props} />}
    />
  </BrowserRouter>
  </Fragment>,
  document.getElementById('root')
)
