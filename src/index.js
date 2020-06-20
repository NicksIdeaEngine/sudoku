import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import App from './App'
import './assets/fonts/fonts.css'
import './styles/reset.css'
import './styles/main.scss'

const rootContainer = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <App />
    </Root>
  </React.StrictMode>,
  rootContainer
)
