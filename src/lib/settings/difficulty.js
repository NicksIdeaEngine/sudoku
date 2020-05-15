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
  const { currentDifficulty } = prevState;
  currentDifficulty.name = getDifficultyName(value);
  currentDifficulty.index = value;
  return { currentDifficulty };
}

export { difficultyOptions, getDifficultyName, setDifficulty };
