import toggleTileState from './toggleTileState';
import clearHighlight from './clearHighlight';

function toggleInsertMode(prevState, value) {
  clearHighlight(prevState);
  const { currentBoard } = prevState;
  const newMode = value;
  currentBoard.insertMode = newMode;
  console.log(currentBoard.insertMode);

  currentBoard.forEach((currentRow) => {
    currentRow.props.children.forEach((currentTile) => {
      if (currentTile.value === newMode) {
        toggleTileState(currentTile, 'highlight');
      }
    });
  });

  return { currentBoard };
}

export default toggleInsertMode;
