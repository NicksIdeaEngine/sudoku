const resetBoard = (currentBoard) => {
  const newBoard = currentBoard.forEach((row) => {
    const newRow = row.props.children.forEach((tile) => {
      const newTile = tile;
      newTile.value = 0;
      return newTile;
    });
    return newRow;
  });
  return newBoard;
};

export default resetBoard;
