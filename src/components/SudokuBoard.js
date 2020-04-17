/* eslint-disable no-console */
import React, { Component } from 'react';
import newStandardSudoku from '../lib/getNewSudoku';
import buildBoard from '../lib/buildBoard';
import Tile from './Tile';

class SudokuBoard extends Component {
  constructor() {
    super();

    const { startingSequence } = newStandardSudoku;

    this.state = {
      startingSequence,
      currentBoard: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const newBoard = buildBoard();
    let row;

    this.setState((prevState) => {
      const { startingSequence } = prevState;
      const splitSequence = startingSequence.split('');

      splitSequence.forEach((e, i) => {
        row = Math.floor(i / 9);
        newBoard[row].props.children[i % 9].value = e;
      });

      return {
        currentBoard: newBoard,
      };
    });
  }

  handleClick(id) {
    this.setState((prevState) => {
      const { currentBoard } = prevState;
      const row = Math.floor(id / 9);
      const rowMod = id % 9;
      const rowContents = currentBoard[row].props.children;
      const tile = rowContents[rowMod];
      const { value } = tile;
      const oldValue = value ? parseInt(value, 10) : 0;
      let newValue = 0;

      if (oldValue !== 9) {
        newValue = oldValue + 1;
      }
      tile.value = newValue.toString();

      currentBoard[row].props.children[rowMod].value = tile.value;

      return { currentBoard };
    });
  }

  render() {
    const { currentBoard } = this.state;

    const fullBoard = currentBoard.map((rowOfTiles) => {
      const rowID = rowOfTiles.props.id;
      const rowClassName = rowOfTiles.props.className;
      const rowContents = rowOfTiles.props.children;
      const tileBatch = rowContents.map((tile) => {
        const { id, row, column, region, className, candidates, value } = tile;

        return (
          <Tile
            key={`tile-${id}`}
            id={id}
            row={row}
            column={column}
            region={region}
            className={className}
            candidates={candidates}
            value={value === '0' ? '' : value}
            handleClick={this.handleClick}
          />
        );
      });

      return (
        <div key={rowID} id={rowID} className={rowClassName}>
          {tileBatch}
        </div>
      );
    });

    return (
      <section className="sudoku">
        <div className="sudoku-container">{fullBoard}</div>
      </section>
    );
  }
}

export default SudokuBoard;
