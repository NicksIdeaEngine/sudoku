import clearHighlight from './clearHighlight';

const clearBoard = (prevState) => {
  const { currentBoard, insertMode } = clearHighlight(prevState);
  currentBoard.forEach((row) => {
    row.props.children.forEach((tile) => {
      const newTile = tile;
      newTile.value = '0';
      newTile.locked = 'false';
      return newTile;
    });
  });
  return { currentBoard, insertMode };
};

export default clearBoard;
