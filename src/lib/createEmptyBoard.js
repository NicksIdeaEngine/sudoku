import React from 'react'
import PropTypes from 'prop-types'
import Tile from '../components/Tile'

const createNewTile = ({
  // {{{
  idNum = 0,
  currentRow = 1,
  currentColumn = 1,
} = {}) => {
  const id = `tile-${idNum}`
  const tileText = 'a'
  const className = ['gameboard-tile']

  return (
    <Tile
      key={id}
      id={id}
      row={currentRow}
      column={currentColumn}
      tileText={tileText}
      className={className.join(' ')}
    />
  )
} // }}}

const createNewRow = ({
  // {{{
  currentRow = 1,
  maxColumns = 9,
} = {}) => {
  let idNum = (currentRow - 1) * 9
  let currentColumn = 1
  return (
    <div
      className="gameboard-row"
      id={`row-${currentRow}`}
      key={`row-${currentRow}`}
    >
      {Array.from(Array(maxColumns), () => {
        const newTile = createNewTile({
          idNum,
          currentRow,
          currentColumn,
        })
        idNum += 1
        currentColumn += 1
        return newTile
      })}
    </div>
  )
} // }}}

const createEmptyBoard = ({
  // {{{
  maxRows = 9,
  maxColumns = 9,
} = {}) => {
  let currentRow = 1

  return Array.from(Array(maxRows), () => {
    const newRow = createNewRow({
      currentRow,
      maxColumns,
    })
    currentRow += 1
    return newRow
  })
} // }}}

createNewTile.propTypes = {
  // {{{
  idNum: PropTypes.number,
  currentRow: PropTypes.number,
  currentColumn: PropTypes.number,
} // }}}

createNewTile.defaultProps = {
  // {{{
  idNum: 0,
  currentRow: 1,
  currentColumn: 1,
} // }}}

createNewRow.propTypes = {
  // {{{
  currentRow: PropTypes.number,
  maxColumns: PropTypes.number,
} // }}}

createNewRow.defaultProps = {
  // {{{
  currentRow: 1,
  maxColumns: 9,
} // }}}

export default createEmptyBoard
