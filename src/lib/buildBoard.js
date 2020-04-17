/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React from 'react';

function buildBoard(maxRows = 9, maxColumns = 9, regionSize = 3) {
  let id = 0;
  let row = 1;
  let column = 1;
  let region = 1;
  const value = '';
  const candidates = [];
  let className = [];
  const newBoard = [];
  let newRowContents = [];

  for (row = 1; row <= maxRows; row += 1) {
    newRowContents = [];
    for (column = 1; column <= maxColumns; column += 1) {
      className = [];
      className.push('sudoku-tile');
      if (column === 1) {
        className.push('sudoku-tile-outer-left');
      }
      if (column === 9) className.push('sudoku-tile-outer-right');
      if (row === 1) {
        className.push('sudoku-tile-outer-top');
      }
      if (row === 9) className.push('sudoku-tile-outer-bottom');
      if (column === 3 || column === 6) {
        className.push('sudoku-tile-inner-right');
      }
      if (column === 4 || column === 7) {
        className.push('sudoku-tile-inner-left');
      }
      if (row === 3 || row === 6) {
        className.push('sudoku-tile-inner-bottom');
      }
      if (row === 4 || row === 7) {
        className.push('sudoku-tile-inner-top');
      }

      region =
        Math.ceil(column / regionSize) +
        Math.floor((row - 1) / regionSize) * regionSize;

      newRowContents.push({
        id,
        row,
        column,
        region,
        value,
        candidates,
        className: className.join(' '),
      });
      id += 1;
    }

    newBoard.push(
      <div className="sudoku-row" id={`row-${row - 1}`}>
        {newRowContents}
      </div>,
    );
  }

  console.log(newBoard);

  return newBoard;
}

export default buildBoard;
