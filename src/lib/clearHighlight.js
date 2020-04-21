const clearHighlight = (prevState) => {
  const { currentBoard } = prevState;

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
  return { currentBoard };
};

export default clearHighlight;
