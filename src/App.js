import React from 'react';
import styled from '@emotion/styled';
import GameBoard from './components/GameBoard';

const AppContainer = styled.div`
  margin: 0 auto;
  padding: 2em;
  width: 50em;
  height: 36em;
`;

function App() {
  return (
    <AppContainer className="app">
      <GameBoard />
    </AppContainer>
  );
}

export default App;
