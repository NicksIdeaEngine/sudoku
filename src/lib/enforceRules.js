import toggleWarning from './toggleWarning';
import getTile from './getTile';

const enforceRules = (prevState, id) => {
  const { currentBoard } = prevState;
  const tile = getTile(currentBoard, id);

  currentBoard.forEach((currentRow) => {
    currentRow.props.children.forEach((currentTile) => {
      if (
        currentTile.id !== tile.id &&
        currentTile.value !== '0' &&
        currentTile.value === tile.value
      ) {
        if (currentTile.row === tile.row) {
          toggleWarning(currentTile);
          if (tile.warning === 'false') toggleWarning(tile);
        } else if (currentTile.column === tile.column) {
          toggleWarning(currentTile);
          if (tile.warning === 'false') toggleWarning(tile);
        } else if (currentTile.region === tile.region) {
          toggleWarning(currentTile);
          if (tile.warning === 'false') toggleWarning(tile);
        }
      }
    });
  });

  return prevState;
};

export default enforceRules;
