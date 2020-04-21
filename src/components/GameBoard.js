/* eslint-disable no-unused-vars */
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
import setDifficulty from '../lib/setDifficulty';
import enforceRules from '../lib/enforceRules';
import toggleTileState from '../lib/toggleTileState';
import toggleInsertMode from '../lib/toggleInsertMode';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startingSequence: '',
      currentBoard: buildBoard(),
      insertMode: '',
      difficulty: {
        name: 'very easy',
        index: 0,
      },
    };

    this.setDifficulty = this.setDifficulty.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleInsertMode = this.toggleInsertMode.bind(this);
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
    const { currentBoard, insertMode } = this.state;
    const tile = getTile(currentBoard, id);

    if (tile.locked === 'false' && tile.active === 'true') {
      let tempNum = parseInt(tile.value, 10) + 1;
      if (tempNum > 9) tempNum = 1;
      tile.value = tempNum.toString();
    }

    if (insertMode !== '' && tile.locked === 'false') {
      tile.value = insertMode;
    }

    this.setState((prevState) => {
      clearHighlight(prevState);
      toggleTileState(tile, 'active');
      toggleTileState(tile, 'highlight');
      highlightRelatedTiles(prevState, id);
      enforceRules(prevState, id);
      return { currentBoard };
    });
  }

  toggleInsertMode(value) {
    this.setState((prevState) => toggleInsertMode(prevState, value));
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
    const {
      currentBoard,
      startingSequence,
      difficulty,
      insertMode,
    } = this.state;
    return (
      <main className="game-board">
        <SudokuBoard
          currentBoard={currentBoard}
          startingSequence={startingSequence}
          handleClick={this.handleClick}
          insertMode={insertMode}
        />
        <Menu
          resetGame={this.resetGame}
          clearBoard={this.clearBoard}
          newGame={this.newGame}
          clearHighlight={this.clearHighlight}
          setDifficulty={this.setDifficulty}
          currentDifficulty={difficulty.name}
          toggleInsertMode={this.toggleInsertMode}
          insertMode={insertMode}
        />
      </main>
    );
  }
}

export default GameBoard;
