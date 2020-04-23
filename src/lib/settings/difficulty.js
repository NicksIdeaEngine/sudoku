const difficultyOptions = [
  'very easy',
  'easy',
  'moderate',
  'challenging',
  'tricky',
  'hard',
  'very hard',
  'extreme',
  'ultra extreme',
];

function getDifficultyName(difficultyID) {
  let difficultyName = '';
  const difficultyMax = difficultyOptions.length;

  if (difficultyID === 9) {
    difficultyName =
      difficultyOptions[Math.floor(Math.random() * Math.floor(difficultyMax))];
  } else if (difficultyID >= 0 && difficultyID <= 8) {
    difficultyName = difficultyOptions[difficultyID];
  }

  return difficultyName;
}

function setDifficulty(prevState, value) {
  const { difficulty } = prevState;
  difficulty.name = getDifficultyName(value);
  difficulty.index = value;
  return { difficulty };
}

export { difficultyOptions, getDifficultyName, setDifficulty };
