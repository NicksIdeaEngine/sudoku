/* eslint-disable no-console */
import React, { Component } from 'react';
import Tile from './Tile';
import puzzleData from '../data/puzzleData';

class Region extends Component {
  constructor() {
    super();

    this.state = {
      puzzle: puzzleData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      console.log(prevState.puzzle[id]);
    });
  }

  render() {
    const { puzzle } = this.state;
    const puzzleTiles = puzzle.map((tile) => (
      <Tile
        key={tile.id}
        id={tile.id}
        value={tile.value}
        row={tile.row}
        column={tile.column}
        region={tile.region}
        candidates={tile.candidates}
        handleChange={this.handleChange}
      />
    ));
    return (
      <div className="region-container">
        <div className="region-row-container">{puzzleTiles}</div>
        <div className="region-row-container">{puzzleTiles}</div>
        <div className="region-row-container">{puzzleTiles}</div>
      </div>
    );
  }
}

export default Region;
