import React from 'react'
import styled from '@emotion/styled'
import Gameboard from './components/Gameboard'
import Menu from './components/Menu'

import useBoardState from './utils/useBoardState'

const AppContainer = styled.div`
  display: flex;
  margin: 1em auto;
`

function App() {
  const { boardState } = useBoardState()

  return (
    <AppContainer className="app-container">
      <Gameboard boardState={boardState} />
      <Menu boardState={boardState} />
    </AppContainer>
  )
}

export default App
