import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Tile extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    const { id, row, column, region, value, className } = this.props

    return (
      <button
        type="button"
        id={id}
        row={row}
        column={column}
        region={region}
        value={value}
        className={className}
      >
        {value}
      </button>
    )
  }
}

const getTile = (currentBoard, id) => {
  const board = currentBoard
  const idNum = parseInt(id.slice(5), 10)
  const row = Math.floor(idNum / 9)
  const column = idNum % 9
  const tile = board[row].props.children[column]
  return tile
}

const getTileText = (tile) => {
  const { value, id } = tile
  let displayText = ''
  const tiletext = []
  const displayTextClassList = []

  if (value >= 1 && value <= 9) {
    tiletext.push(value)
    displayTextClassList.push('sudoku-tile-value')
  } else {
    displayTextClassList.push('sudoku-tile-candidate')
  }

  displayText = (
    <div
      id={`tile-text-${id}`}
      key={`tile-text-${id}`}
      className={displayTextClassList.join(' ')}
    >
      {tiletext}
    </div>
  )

  return displayText
}

export { getTile, getTileText }

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  region: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Tile
