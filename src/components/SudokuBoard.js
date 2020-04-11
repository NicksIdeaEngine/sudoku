/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
import React, { Component } from 'react';
import getNewSudoku from '../lib/getNewSudoku';
import buildBoard from '../lib/buildBoard';
import Tile from './Tile';

const newSudoku = getNewSudoku();

class SudokuBoard extends Component {
  constructor() {
    super();

    const { startingSequence, solvedSequence } = newSudoku;

    this.state = {
      startingSequence,
      solvedSequence,
      currentBoard: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
  }

  componentDidMount() {
    const newBoard = buildBoard();
    this.setState(() => {
      return {
        currentBoard: newBoard,
      };
    });
    this.startNewGame();
  }

  handleClick(id) {
    this.setState((prevState) => {
      const { currentBoard } = prevState;
      const { value } = currentBoard[id];
      const oldValue = value ? parseInt(value, 10) : 0;
      let newValue = 0;

      if (oldValue !== 9) {
        newValue = oldValue + 1;
      }

      currentBoard[id].value = newValue.toString();

      return { currentBoard };
    });
  }

  startNewGame() {
    this.setState((prevState) => {
      const { currentBoard, startingSequence } = prevState;
      const splitSequence = startingSequence.split('');
      splitSequence.forEach((e, i) => {
        currentBoard[i].value = e;
      });
      return { currentBoard };
    });
  }

  render() {
    const { currentBoard, startingSequence } = this.state;
    let { solvedSequence } = this.state;
    if (solvedSequence === '') solvedSequence = '12345';
    const boardDisplay = currentBoard.map((tile) => {
      const {
        id,
        row,
        column,
        region,
        value,
        candidates,
        classNames,
        style,
      } = tile;

      return (
        <Tile
          key={id}
          row={row}
          column={column}
          region={region}
          value={value === '0' ? '' : value}
          id={id}
          candidates={candidates}
          classNames={classNames}
          style={style}
          handleClick={this.handleClick}
        />
      );
    });
    return (
      <section className="sudoku">
        <div className="sudoku-container">{boardDisplay}</div>
      </section>
    );
  }
}

export default SudokuBoard;
