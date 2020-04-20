import React, { Component } from 'react';
import SudokuBoard from './SudokuBoard';
import Menu from './Menu';

import buildBoard from '../lib/buildBoard';
import highlightRelatedTiles from '../lib/highlightRelatedTiles';
import resetGame from '../lib/resetGame';
import clearBoard from '../lib/clearBoard';
import newGame from '../lib/newGame';
import clearHighlight from '../lib/clearHighlight';
import getTile from '../lib/getTile';
import toggleHighlight from '../lib/toggleHighlight';
import toggleActive from '../lib/toggleActive';
import setDifficulty from '../lib/setDifficulty';
import enforceRules from '../lib/enforceRules';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startingSequence: '',
      currentBoard: buildBoard(),
      difficulty: {
        name: 'very easy',
        index: 0,
      },
    };

    this.setDifficulty = this.setDifficulty.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.clearBoard = this.clearBoard.bind(this);
    this.newGame = this.newGame.bind(this);
    this.clearHighlight = this.clearHighlight.bind(this);
  }

  componentDidMount() {
    this.setState((prevState) => newGame(prevState));
  }

  setDifficulty(value) {
    this.setState((prevState) => setDifficulty(prevState, value));
  }

  handleClick(id) {
    this.setState((prevState) => {
      const { currentBoard } = prevState;
      const tile = getTile(currentBoard, id);
      if (tile.active === 'true') {
        // clearHighlight(prevState);
        let tempNum = parseInt(tile.value, 10) + 1;
        if (tempNum > 9) tempNum = 1;
        tile.value = tempNum.toString();
        clearHighlight(prevState);
        toggleActive(tile);
        toggleHighlight(tile);
        highlightRelatedTiles(prevState, id);
        enforceRules(prevState, id);
      } else {
        clearHighlight(prevState);
        toggleActive(tile);
        toggleHighlight(tile);
        highlightRelatedTiles(prevState, id);
        enforceRules(prevState, id);
      }
      return { currentBoard };
    });
  }

  resetGame() {
    this.setState((prevState) => resetGame(prevState));
  }

  clearBoard() {
    this.setState((prevState) => clearBoard(prevState));
  }

  newGame() {
    this.setState((prevState) => newGame(prevState));
  }

  clearHighlight() {
    this.setState((prevState) => clearHighlight(prevState));
  }

  render() {
    const { currentBoard, startingSequence, difficulty } = this.state;
    return (
      <main className="game-board">
        <SudokuBoard
          currentBoard={currentBoard}
          startingSequence={startingSequence}
          handleClick={this.handleClick}
        />
        <Menu
          resetGame={this.resetGame}
          clearBoard={this.clearBoard}
          newGame={this.newGame}
          clearHighlight={this.clearHighlight}
          setDifficulty={this.setDifficulty}
          currentDifficulty={difficulty.name}
        />
      </main>
    );
  }
}

export default GameBoard;
