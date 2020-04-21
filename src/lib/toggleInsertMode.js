import toggleTileState from './toggleTileState';
import clearHighlight from './clearHighlight';

function toggleInsertMode(prevState, value) {
  clearHighlight(prevState);
  const { currentBoard } = prevState;
  let { insertMode } = prevState;

  insertMode = value;

  currentBoard.forEach((currentRow) => {
    currentRow.props.children.forEach((currentTile) => {
      if (currentTile.value === insertMode) {
        toggleTileState(currentTile, 'highlight');
      }
    });
  });

  const { classList } = document.getElementById(`menu-number-btn-${value - 1}`);
  classList.add(`menu-number-button-active`);

  return { currentBoard, insertMode };
}

export default toggleInsertMode;
