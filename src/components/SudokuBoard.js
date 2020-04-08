/* eslint-disable no-console */
import React, { Component } from 'react';
import tilesData from '../data/puzzleData';
import Tile from './Tile';

class SudokuBoard extends Component {
  constructor() {
    super();

    this.state = {
      sudokuSequence: tilesData,
      currentBoard: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState((prevState) => {
      const splitSequence = prevState.sudokuSequence.split('');
      const { currentBoard } = prevState;
      let classNames = [];
      let region = 1;
      let id = 0;
      let style = {};
      let offset = 0;

      for (let row = 1; row <= 9; row += 1) {
        for (let column = 1; column <= 9; column += 1) {
          classNames = [];
          offset = 0;
          style = { left: '', top: '' };
          classNames.push('sudoku-tile');
          if (column === 1) {
            classNames.push('sudoku-tile-outer-left');
          } else {
            offset = (column - 1) * -0.2;
            style.left = `${offset}em`;
          }
          if (column === 9) classNames.push('sudoku-tile-outer-right');
          if (row === 1) {
            classNames.push('sudoku-tile-outer-top');
          } else {
            offset = (row - 1) * -0.2;
            style.top = `${offset}em`;
          }
          if (row === 9) classNames.push('sudoku-tile-outer-bottom');
          if (column === 3 || column === 6) {
            classNames.push('sudoku-tile-inner-right');
          }
          if (column === 4 || column === 7) {
            classNames.push('sudoku-tile-inner-left');
          }
          if (row === 3 || row === 6) {
            classNames.push('sudoku-tile-inner-bottom');
          }
          if (row === 4 || row === 7) {
            classNames.push('sudoku-tile-inner-top');
          }

          region = Math.ceil(column / 3) + Math.floor((row - 1) / 3) * 3;

          currentBoard.push({
            id,
            value: splitSequence[id],
            row,
            column,
            region,
            classNames: classNames.join(' '),
            style,
          });
          id += 1;
        }
      }

      return {
        currentBoard,
      };
    });
  }

  handleClick(id) {
    this.setState((prevState) => {
      const { currentBoard } = prevState;
      const newValue = 1;

      if (currentBoard[id].value !== '9') {
        toString(parseInt((currentBoard[id].value += 1), 10));
      } else {
        currentBoard[id].value = toString(newValue);
      }

      return {
        currentBoard,
      };
    });
  }

  render() {
    const { currentBoard } = this.state;
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
