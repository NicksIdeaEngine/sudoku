import clearHighlight from './clearHighlight';

const resetGame = (prevState) => {
  clearHighlight(prevState);
  const { startingSequence, currentBoard } = prevState;
  const splitSequence = startingSequence.split('');
  let row;
  let column;

  splitSequence.forEach((value, index) => {
    row = Math.floor(index / 9);
    column = index % 9;
    currentBoard[row].props.children[column].value = value;
  });

  return { currentBoard };
};

export default resetGame;
