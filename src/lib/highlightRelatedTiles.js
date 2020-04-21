import toggleTileState from './toggleTileState';
import getTile from './getTile';

const highlightRelatedTiles = (prevState, id) => {
  const { currentBoard } = prevState;
  const tile = getTile(currentBoard, id);

  currentBoard.forEach((currentRow) => {
    currentRow.props.children.forEach((currentTile) => {
      if (currentTile.id !== tile.id) {
        if (currentTile.row === tile.row) {
          toggleTileState(currentTile, 'highlight');
        } else if (currentTile.column === tile.column) {
          toggleTileState(currentTile, 'highlight');
        } else if (currentTile.region === tile.region) {
          toggleTileState(currentTile, 'highlight');
        }
      }
    });
  });

  return { currentBoard };
};

export default highlightRelatedTiles;
