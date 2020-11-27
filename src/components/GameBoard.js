import React, { Component } from 'react'
import SudokuBoard from './SudokuBoard'
import Menu from './Menu'

import buildBoard from '../lib/board-functions/buildBoard'
import { newGame, resetGame } from '../lib/board-functions/changeGameState'
import {
  clearBoard,
  clearHighlight,
  highlightRelatedTiles,
} from '../lib/board-functions/changeBoardState'
import { getTile } from './Tile'
import { setDifficulty } from '../lib/settings/difficulty'
import enforceRules from '../lib/rules/enforce'
import toggleTileState from '../lib/board-functions/toggleTileState'

class GameBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentBoard: buildBoard(),
      currentDifficulty: {
        name: 'very easy',
        index: 0,
      },
    }

    this.setDifficulty = this.setDifficulty.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.resetGame = this.resetGame.bind(this)
    this.clearBoard = this.clearBoard.bind(this)
    this.newGame = this.newGame.bind(this)
    this.clearHighlight = this.clearHighlight.bind(this)
  }

  componentDidMount() {
    this.setState((prevState) => newGame(prevState))
  }

  setDifficulty(value) {
    this.setState((prevState) => setDifficulty(prevState, value))
  }

  handleClick(id) {
    const { currentBoard } = this.state
    const tile = getTile(currentBoard, id)

    if (tile.locked === 'false' && tile.active === 'true') {
      let tempNum = parseInt(tile.value, 10) + 1
      if (tempNum > 9) tempNum = 1
      tile.value = tempNum.toString()
    }

    this.setState((prevState) => {
      clearHighlight(prevState)
      toggleTileState(tile, 'active')
      toggleTileState(tile, 'highlight')
      highlightRelatedTiles(prevState, id)
      enforceRules(prevState, id)
      return { currentBoard }
    })
  }

  resetGame() {
    this.setState((prevState) => resetGame(prevState))
  }

  clearBoard() {
    this.setState((prevState) => clearBoard(prevState))
  }

  newGame() {
    this.setState((prevState) => newGame(prevState))
  }

  clearHighlight() {
    this.setState((prevState) => clearHighlight(prevState))
  }

  render() {
    const { currentBoard, currentDifficulty } = this.state
    return (
      <main className="game-board">
        <SudokuBoard
          currentBoard={currentBoard}
          handleClick={this.handleClick}
        />
        <Menu
          resetGame={this.resetGame}
          clearBoard={this.clearBoard}
          newGame={this.newGame}
          clearHighlight={this.clearHighlight}
          setDifficulty={this.setDifficulty}
          currentDifficulty={currentDifficulty.name}
        />
      </main>
    )
  }
}

export default GameBoard
