/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import React, { Component } from 'react';
import SudokuBoard from './SudokuBoard';
import Menu from './Menu';
import newStandardSudoku from '../lib/getNewSudoku';
import buildBoard from '../lib/buildBoard';
import highlightRelatedTiles from '../lib/highlightRelatedTiles';
import clearHighlight from '../lib/clearHighlight';
import getTile from '../lib/getTile';
import toggleHighlight from '../lib/toggleHighlight';
import toggleActive from '../lib/toggleActive';

class GameBoard extends Component {
  constructor(props) {
    super(props);

    const { startingSequence } = newStandardSudoku();

    this.state = {
      startingSequence,
      currentBoard: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.clearHighlight = this.clearHighlight.bind(this);
  }

  componentDidMount() {
    const newBoard = buildBoard();
    let row;

    this.setState((prevState) => {
      const { startingSequence } = prevState;
      const splitSequence = startingSequence.split('');

      splitSequence.forEach((e, i) => {
        row = Math.floor(i / 9);
        newBoard[row].props.children[i % 9].value = e;
      });

      return {
        currentBoard: newBoard,
      };
    });
  }

  handleClick(id) {
    this.setState((prevState) => {
      const { currentBoard } = prevState;
      const tile = getTile(currentBoard, id);
      console.log(tile.active);
      if (tile.active === 'true') {
        clearHighlight(prevState);
      } else {
        clearHighlight(prevState);
        toggleActive(tile);
        toggleHighlight(tile);
        highlightRelatedTiles(prevState, id);
      }
      return { currentBoard };
    });
  }

  clearHighlight() {
    this.setState((prevState) => clearHighlight(prevState));
  }

  render() {
    const { currentBoard, startingSequence } = this.state;
    return (
      <main className="game-board">
        <SudokuBoard
          currentBoard={currentBoard}
          startingSequence={startingSequence}
          handleClick={this.handleClick}
        />
        <Menu clearHighlight={this.clearHighlight} />
      </main>
    );
  }
}

export default GameBoard;
