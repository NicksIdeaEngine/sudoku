import standardSudokus from '../data/sudokuData';

const newStandardSudoku = (difficulty) => {
  const { gameData, sizeParameters } = standardSudokus;
  const sudokuDifficulty = !difficulty
    ? Math.floor(Math.random() * Math.floor(gameData.length))
    : difficulty;

  const sudokuChoices = gameData[sudokuDifficulty];

  const randomIndex = Math.floor(
    Math.random() * Math.floor(sudokuChoices.length),
  );

  const { startingSequence, solvedSequence } = sudokuChoices[randomIndex];

  return { startingSequence, solvedSequence, sizeParameters };
};

export default newStandardSudoku();
