const clearHighlight = (prevState) => {
  const { currentBoard } = prevState;

  currentBoard.forEach((currentRow) => {
    currentRow.props.children.forEach((currentTile) => {
      const newTile = currentTile;
      const { className } = newTile;
      const splitClassName = className.split(' ');

      if (newTile.active === 'true') {
        newTile.active = 'false';
        splitClassName.splice(
          splitClassName.findIndex((e) => e === 'sudoku-tile-active'),
          1,
        );
      }
      if (newTile.highlight === 'true') {
        newTile.highlight = 'false';
        splitClassName.splice(
          splitClassName.findIndex((e) => e === 'sudoku-tile-highlight'),
          1,
        );
      }
      if (newTile.warning === 'true') {
        newTile.warning = 'false';
        splitClassName.splice(
          splitClassName.findIndex((e) => e === 'sudoku-tile-warning'),
          1,
        );
      }
      newTile.className = splitClassName.join(' ');
      return newTile;
    });
    return currentRow;
  });
  return { currentBoard };
};

export default clearHighlight;
