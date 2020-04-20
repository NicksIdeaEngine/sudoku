import clearHighlight from './clearHighlight';

const clearBoard = (prevState) => {
  clearHighlight(prevState);
  const { currentBoard } = prevState;
  currentBoard.forEach((row) => {
    row.props.children.forEach((tile) => {
      const newTile = tile;
      newTile.value = '0';
      return newTile;
    });
  });
  return { currentBoard };
};

export default clearBoard;
