import React from 'react'
import styled from 'styled-components'
import GameBoard from './components/GameBoard'

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 62em;
  height: 50em;
`

function App() {
  return (
    <AppContainer className="app">
      <GameBoard />
    </AppContainer>
  )
}

export default App
