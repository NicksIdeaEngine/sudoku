import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GameBoard from './components/GameBoard';

function App() {
  return (
    <div className="page">
      <Header />
      <GameBoard />
      <Footer />
    </div>
  );
}

export default App;
