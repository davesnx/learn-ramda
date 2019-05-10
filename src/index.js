import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Global, css } from '@emotion/core'
import { BrowserRouter, Route } from 'react-router-dom'

import App from './App.jsx'
import data from './data'
import colors from './colors'

const normalize = css`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,600');

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    font-family: 'IBM Plex Mono', monospace;
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 1.7;
    color: ${colors.black};
  }

  a{
    color: ${colors.blue};
    transition: 0.2s;

    &:hover { color: ${colors.black}; }
  }
`

render(
  <Fragment>
    <Global styles={normalize}/>
    <BrowserRouter hashType='noslash' basename={process.env.PUBLIC_URL}>
      <Route
        path={'/:type?/:action?'}
        render={props => <App data={data} {...props} />}
      />
    </BrowserRouter>
  </Fragment>,
  document.getElementById('root')
)
