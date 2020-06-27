import React from 'react'
import styled from '@emotion/styled'
import Gameboard from './components/Gameboard'
import Menu from './components/Menu'

const AppContainer = styled.div`
  display: flex;
  margin: 1em auto;
`

function App() {
  return (
    <AppContainer className="app-container">
      <Gameboard />
      <Menu />
    </AppContainer>
  )
}

export default App
