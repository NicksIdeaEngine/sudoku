function buildBoard() {
  const newBoard = [];
  let classNames = [];
  const candidates = [];
  let region = 1;
  let id = 0;
  let style = {};
  let offset = 0;
  let row = 1;
  let column = 1;

  for (row = 1; row <= 9; row += 1) {
    for (column = 1; column <= 9; column += 1) {
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

      newBoard.push({
        id,
        value: '',
        row,
        column,
        region,
        classNames: classNames.join(' '),
        style,
        candidates,
      });
      id += 1;
    }
  }

  return newBoard;
}

export default buildBoard;
