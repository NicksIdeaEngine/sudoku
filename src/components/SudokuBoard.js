import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tile from './Tile'

class SudokuBoard extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { currentBoard, handleClick } = this.props

    const fullBoard = currentBoard.map((rowOfTiles) => {
      const rowID = rowOfTiles.props.id
      const rowClassName = rowOfTiles.props.className
      const rowContents = rowOfTiles.props.children
      const tileBatch = rowContents.map((tile) => {
        const { id, row, column, region, value, className } = tile

        return (
          <Tile
            key={id}
            id={id}
            row={row}
            column={column}
            region={region}
            value={value === '0' ? '' : value}
            className={className}
            handleClick={handleClick}
          />
        )
      })

      return (
        <div key={rowID} id={rowID} className={rowClassName}>
          {tileBatch}
        </div>
      )
    })

    return (
      <section className="sudoku">
        <div className="sudoku-container">{fullBoard}</div>
      </section>
    )
  }
}

SudokuBoard.propTypes = {
  currentBoard: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default SudokuBoard
