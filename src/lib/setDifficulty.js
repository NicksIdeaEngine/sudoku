/* eslint-disable no-unused-vars */
const getDifficultyName = (difficulty) => {
  let currentDifficulty = difficulty;
  let difficultyName = '';
  const difficultyMax = 8;

  if (currentDifficulty === 9) {
    currentDifficulty = Math.floor(Math.random() * Math.floor(difficultyMax));
  }

  switch (currentDifficulty) {
    case 1:
      difficultyName = 'easy';
      break;
    case 2:
      difficultyName = 'moderate';
      break;
    case 3:
      difficultyName = 'challenging';
      break;
    case 4:
      difficultyName = 'tricky';
      break;
    case 5:
      difficultyName = 'hard';
      break;
    case 6:
      difficultyName = 'very hard';
      break;
    case 7:
      difficultyName = 'extreme';
      break;
    case 8:
      difficultyName = 'ultra extreme';
      break;
    case 0:
    default:
      difficultyName = 'very easy';
      break;
  }
  return difficultyName;
};

const setDifficulty = (prevState, value) => {
  const { difficulty } = prevState;
  console.log(value, typeof value);
  difficulty.name = getDifficultyName(value);
  difficulty.index = value;
  console.log(difficulty);
  return { difficulty };
};

export default setDifficulty;
