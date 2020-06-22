import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import App from './App'

const rootContainer = document.getElementById('root')

ReactDOM.render(
  <>
    <Root>
      <App />
    </Root>
  </>,
  rootContainer
)
