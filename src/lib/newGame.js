import clearHighlight from './clearHighlight';
import getNewSudoku from './getNewSudoku';

const newGame = (prevState) => {
  const { difficulty } = prevState;
  const { currentBoard, insertMode } = clearHighlight(prevState);
  const { startingSequence } = getNewSudoku(difficulty);
  const splitSequence = startingSequence.split('');
  let tile;
  let row;
  let column;

  splitSequence.forEach((value, index) => {
    row = Math.floor(index / 9);
    column = index % 9;
    tile = currentBoard[row].props.children[column];
    tile.value = value;
    tile.locked = value !== '0' ? 'true' : 'false';
    currentBoard[row].props.children[column] = tile;
  });

  return { currentBoard, insertMode, startingSequence };
};

export default newGame;
