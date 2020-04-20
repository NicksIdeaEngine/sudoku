import clearHighlight from './clearHighlight';
import getNewSudoku from './getNewSudoku';

const newGame = (prevState) => {
  clearHighlight(prevState);
  const { currentBoard, difficulty } = prevState;
  const { startingSequence } = getNewSudoku(difficulty);
  const splitSequence = startingSequence.split('');
  let row;
  let column;

  splitSequence.forEach((value, index) => {
    row = Math.floor(index / 9);
    column = index % 9;
    currentBoard[row].props.children[column].value = value;
  });

  return { currentBoard, startingSequence };
};

export default newGame;
