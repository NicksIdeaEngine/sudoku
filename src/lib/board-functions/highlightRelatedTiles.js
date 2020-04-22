import toggleTileState from './toggleTileState';
import { getTile } from '../../components/Tile';

const highlightRelatedTiles = (prevState, id) => {
  const { currentBoard } = prevState;
  const tile = getTile(currentBoard, id);

  currentBoard.forEach((currentRow) => {
    currentRow.props.children.forEach((currentTile) => {
      if (currentTile.id !== tile.id) {
        if (
          currentTile.row === tile.row ||
          currentTile.column === tile.column ||
          currentTile.region === tile.region ||
          (currentTile.value === tile.value && currentTile.value !== '0')
        ) {
          toggleTileState(currentTile, 'highlight');
        }
      }
    });
  });

  return { currentBoard };
};

export default highlightRelatedTiles;
