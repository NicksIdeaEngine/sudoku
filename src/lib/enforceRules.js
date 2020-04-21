import toggleTileState from './toggleTileState';
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
        if (
          currentTile.row === tile.row ||
          currentTile.column === tile.column ||
          currentTile.region === tile.region
        ) {
          toggleTileState(currentTile, 'warning');
          if (tile.warning === 'false') toggleTileState(tile, 'warning');
        }
      }
    });
  });

  return prevState;
};

export default enforceRules;
