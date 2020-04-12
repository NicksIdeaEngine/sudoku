/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react';
import newStandardSudoku from '../lib/getNewSudoku';
import { calculateStyles, buildBoard } from '../lib/buildBoard';
import Tile from './Tile';

class SudokuBoard extends Component {
  constructor() {
    super();

    const {
      startingSequence,
      solvedSequence,
      sizeParameters,
    } = newStandardSudoku;

    this.state = {
      startingSequence,
      solvedSequence,
      currentBoard: [],
      containerStyles: [],
      sizeParameters,
    };
    this.handleClick = this.handleClick.bind(this);
    this.startNewGame = this.startNewGame.bind(this);
  }

  componentDidMount() {
    const { newBoard, newContainerStyles } = buildBoard();

    this.setState(() => {
      return {
        currentBoard: newBoard,
        containerStyles: newContainerStyles,
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
    const { currentBoard, containerStyles, sizeParameters } = this.state;
    let { solvedSequence } = this.state;

    if (solvedSequence === '') solvedSequence = '12345';

    const tileBatch = currentBoard.map((tile) => {
      const {
        id,
        row,
        column,
        region,
        classNames,
        style,
        candidates,
        value,
      } = tile;

      return (
        <Tile
          key={id}
          id={id}
          row={row}
          column={column}
          region={region}
          classNames={classNames}
          style={style}
          candidates={candidates}
          value={value === '0' ? '' : value}
          handleClick={this.handleClick}
        />
      );
    });

    return (
      <section className="sudoku">
        <div className="sudoku-container">{tileBatch}</div>
        <br />
        <div className="container-styles">{containerStyles}</div>
        <br />
        {typeof sizeParameters}
      </section>
    );
  }
}

export default SudokuBoard;
