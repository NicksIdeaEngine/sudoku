const clearHighlight = (prevState) => {
  const { currentBoard } = prevState;
  const insertMode = '';
  let classList;

  currentBoard.forEach((currentRow) => {
    currentRow.props.children.forEach((currentTile) => {
      const newTile = currentTile;
      const { className } = newTile;
      const splitClassName = className.split(' ');
      const effects = ['active', 'highlight', 'warning'];

      effects.forEach((effect) => {
        if (newTile[`${effect}`] === 'true') {
          newTile[`${effect}`] = 'false';
          splitClassName.splice(
            splitClassName.findIndex((e) => e === `sudoku-tile-${effect}`),
            1,
          );
        }
      });

      newTile.className = splitClassName.join(' ');
      return newTile;
    });
    return currentRow;
  });

  for (let i = 1; i <= 9; i += 1) {
    classList = document.getElementById(`menu-number-btn-${i - 1}`).classList;
    classList.remove(`menu-number-button-active`);
  }

  return { currentBoard, insertMode };
};

export default clearHighlight;
