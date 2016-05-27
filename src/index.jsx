import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'normalize.css'

import configureStore from './store/configureStore'
import Root from './layouts/Root'

const store = configureStore()

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./layouts/Root', () => {
    render(
      <AppContainer>
        <Root store={store} />
      </AppContainer>,
    document.getElementById('app')
    )
  })
}