function startNewGame() {
  this.setState((prevState) => {
    const splitSequence = prevState.startingSequence.split('');
    const { currentBoard } = prevState;
    splitSequence.forEach((e, i) => {
      currentBoard[i].value = e;
    });
    return {
      currentBoard,
    };
  });
}

export default startNewGame();
