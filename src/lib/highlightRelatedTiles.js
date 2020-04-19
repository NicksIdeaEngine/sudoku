import toggleHighlight from './toggleHighlight';
import getTile from './getTile';

const highlightRelatedTiles = (prevState, id) => {
  const { currentBoard } = prevState;
  const tile = getTile(currentBoard, id);

  currentBoard.forEach((currentRow) => {
    currentRow.props.children.forEach((currentTile) => {
      if (currentTile.id !== tile.id) {
        if (currentTile.row === tile.row) {
          toggleHighlight(currentTile);
        } else if (currentTile.column === tile.column) {
          toggleHighlight(currentTile);
        } else if (currentTile.region === tile.region) {
          toggleHighlight(currentTile);
        }
      }
    });
  });

  return { currentBoard };
};

export default highlightRelatedTiles;
