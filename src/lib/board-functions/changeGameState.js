import standardSudokus from '../../data/sudokuData';
import { clearHighlight } from './changeBoardState';

const getNewSudoku = (difficulty) => {
  const { gameData, sizeParameters } = standardSudokus;
  let sudokuDifficulty = 0;
  if (difficulty === undefined || difficulty.index === 9) {
    sudokuDifficulty = Math.floor(Math.random() * Math.floor(gameData.length));
  } else {
    sudokuDifficulty = difficulty.index;
  }

  const sudokuChoices = gameData[sudokuDifficulty];
  const randomIndex = Math.floor(
    Math.random() * Math.floor(sudokuChoices.length),
  );

  const { startingSequence, solvedSequence } = sudokuChoices[randomIndex];

  return { startingSequence, solvedSequence, sizeParameters };
};

const newGame = (prevState) => {
  const { currentDifficulty } = prevState;
  const { currentBoard, insertMode } = clearHighlight(prevState);
  const { startingSequence } = getNewSudoku(currentDifficulty);
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

const resetGame = (prevState) => {
  const { startingSequence } = prevState;
  const { currentBoard, insertMode } = clearHighlight(prevState);
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

  return { currentBoard, insertMode };
};

export { newGame, resetGame };
