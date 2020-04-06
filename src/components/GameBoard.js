import React, { Component } from 'react';
import SudokuBoard from './SudokuBoard';

class GameBoard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="game-board">
        <SudokuBoard />
      </div>
    );
  }
}

export default GameBoard;
