/* eslint-disable no-unused-vars */
function calculateStyles(maxRows = 9, maxColumns = 9, regionSize = 3) {
  const tileWidth = 3.5;
  const tileBorderWidth = 0.2;
  const offset = 0.2;
  // const boardContainerWidth;

  // .sudoku-tile { width: 3.5em; height: 3.5em; }
  // .sudoku-container { max-width: 26.75em; }
}

function buildBoard(maxRows = 9, maxColumns = 9, regionSize = 3) {
  const newBoard = [];
  let id = 0;
  const value = '';
  let row = 1;
  let column = 1;
  let region = 1;
  let classNames = [];
  let style = {};
  let offset = 0;
  const candidates = [];
  // const newContainerStyles = calculateStyles();

  for (row = 1; row <= maxRows; row += 1) {
    for (column = 1; column <= maxColumns; column += 1) {
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

      region =
        Math.ceil(column / regionSize) +
        Math.floor((row - 1) / regionSize) * regionSize;

      newBoard.push({
        id,
        row,
        column,
        region,
        classNames: classNames.join(' '),
        style,
        candidates,
        value,
      });
      id += 1;
    }
  }

  const newContainerStyles = calculateStyles();

  return { newBoard, newContainerStyles };
  // return { newBoard };
}

export { calculateStyles, buildBoard };
