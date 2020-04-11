import allSudokus from '../data/sudokuData';

const newSudoku = (difficulty) => {
  const sudokuDifficulty = !difficulty
    ? Math.floor(Math.random() * Math.floor(allSudokus.length))
    : difficulty;

  const sudokuChoices = allSudokus[sudokuDifficulty];

  const randomIndex = Math.floor(
    Math.random() * Math.floor(sudokuChoices.length),
  );

  return sudokuChoices[randomIndex];
};

export default newSudoku;
