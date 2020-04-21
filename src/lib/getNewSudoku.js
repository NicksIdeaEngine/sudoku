import standardSudokus from '../data/sudokuData';

function getNewSudoku(difficulty) {
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
}

export default getNewSudoku;
