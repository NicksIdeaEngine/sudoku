/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import Tile from '../components/Tile'

const createNewTile = ({
  // {{{
  idNum = 0,
  currentRow = 1,
  currentColumn = 1,
  regionWidth,
  regionHeight,
} = {}) => {
  const id = `tile-${idNum}`
  const region =
    Math.ceil(currentColumn / regionWidth) +
    Math.floor((currentRow - 1) / regionHeight) * regionHeight
  const value = ''
  const candidates = []
  const tileText = 'a'
  const className = ['gameboard-tile']
  const status = {
    locked: false,
    active: false,
    highlight: false,
    warning: false,
  }

  return (
    <Tile
      key={id}
      id={id}
      row={currentRow}
      column={currentColumn}
      region={region}
      value={value}
      candidates={candidates}
      tileText={tileText}
      className={className.join(' ')}
      status={status}
    />
  )
} // }}}

const createNewRow = ({
  // {{{
  currentRow = 1,
  maxColumns = 9,
  regionWidth = 3,
  regionHeight = 3,
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
          regionWidth,
          regionHeight,
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
  regionWidth = 3,
  regionHeight = 3,
} = {}) => {
  let currentRow = 1

  return Array.from(Array(maxRows), () => {
    const newRow = createNewRow({
      currentRow,
      maxColumns,
      regionWidth,
      regionHeight,
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
  regionWidth: PropTypes.number,
  regionHeight: PropTypes.number,
} // }}}

createNewTile.defaultProps = {
  // {{{
  idNum: 0,
  currentRow: 1,
  currentColumn: 1,
  regionWidth: 3,
  regionHeight: 3,
} // }}}

createNewRow.propTypes = {
  // {{{
  currentRow: PropTypes.number,
  maxColumns: PropTypes.number,
  regionWidth: PropTypes.number,
  regionHeight: PropTypes.number,
} // }}}

createNewRow.defaultProps = {
  // {{{
  currentRow: 1,
  maxColumns: 9,
  regionWidth: 3,
  regionHeight: 3,
} // }}}

export default createEmptyBoard
