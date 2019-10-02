import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { Global, css } from '@emotion/core'
import { HashRouter, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { YMInitializer } from 'react-yandex-metrika'

import App from './app.jsx'
import data from './data.json'
import colors from './colors'

const normalize = css`
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,600');

  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,
  body {
    font-family: 'IBM Plex Mono', monospace;
    margin: 0;
    padding: 0;
    font-size: 18px;
    line-height: 1.7;
    color: ${colors.black};
  }

  a {
    color: ${colors.blue};
    transition: 0.2s;

    &:hover {
      color: ${colors.black};
    }
  }
`

const history = createBrowserHistory()

render(
  <Fragment>
    <YMInitializer
      accounts={[53623087]}
      options={{
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        trackHash: true
      }}
      version="2"
    />
    <Global styles={normalize} />
    <HashRouter history={history} hashType="noslash">
      <Route
        path="/:type?/:action?"
        render={props => <App data={data} {...props} />}
      />
    </HashRouter>
  </Fragment>,
  document.getElementById('root')
)
