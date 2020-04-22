const difficulty = {
  difficultyOptions: [
    'very easy',
    'easy',
    'moderate',
    'challenging',
    'tricky',
    'hard',
    'very hard',
    'extreme',
    'ultra extreme',
    'random',
  ],
  getName: (currentDifficulty) => {
    let newDifficulty = currentDifficulty;
    let difficultyName = '';
    const difficultyMax = 8;

    if (currentDifficulty === 9) {
      newDifficulty = Math.floor(Math.random() * Math.floor(difficultyMax));
    }

    switch (newDifficulty) {
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
  },
  setDifficulty: (prevState, value) => {
    const { currentDifficulty } = prevState;
    currentDifficulty.name = difficulty.getName(value);
    currentDifficulty.index = value;
    return { difficulty: currentDifficulty };
  },
};

// const getDifficultyName = (currentDifficulty) => {
//   let newDifficulty = currentDifficulty;
//   let difficultyName = '';
//   const difficultyMax = 8;

//   if (currentDifficulty === 9) {
//     newDifficulty = Math.floor(Math.random() * Math.floor(difficultyMax));
//   }

//   switch (newDifficulty) {
//     case 1:
//       difficultyName = 'easy';
//       break;
//     case 2:
//       difficultyName = 'moderate';
//       break;
//     case 3:
//       difficultyName = 'challenging';
//       break;
//     case 4:
//       difficultyName = 'tricky';
//       break;
//     case 5:
//       difficultyName = 'hard';
//       break;
//     case 6:
//       difficultyName = 'very hard';
//       break;
//     case 7:
//       difficultyName = 'extreme';
//       break;
//     case 8:
//       difficultyName = 'ultra extreme';
//       break;
//     case 0:
//     default:
//       difficultyName = 'very easy';
//       break;
//   }
//   return difficultyName;
// };

// const setDifficulty = (prevState, value) => {
//   const currentDifficulty = prevState.difficulty;
//   currentDifficulty.name = getDifficultyName(value);
//   currentDifficulty.index = value;
//   return { difficulty: currentDifficulty };
// };

export default difficulty;
