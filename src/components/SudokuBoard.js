import React, { Component } from 'react';
// import Region from './Region';
import Tile from './Tile';

class SudokuBoard extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div className="sudoku-board" role="grid">
        <div role="row">
          <Tile />
        </div>
      </div>
    );
  }
}

export default SudokuBoard;
