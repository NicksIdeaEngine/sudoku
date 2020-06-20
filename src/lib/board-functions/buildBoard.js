import React from 'react'

function buildBoard(maxRows = 9, maxColumns = 9, regionSize = 3) {
  let id = 0
  let region = 1
  const value = ''
  const candidates = []
  let className = []
  const active = 'false'
  const highlight = 'false'
  const warning = 'false'
  const locked = 'false'
  const tiletext = ''

  const newBoard = []
  let newRowContents = []

  for (let i = 0; i < 3; i += 1) {
    candidates.push([])
    for (let j = 0; j < 3; j += 1) {
      candidates[i].push(' ')
    }
  }

  for (let row = 1; row <= maxRows; row += 1) {
    newRowContents = []
    for (let column = 1; column <= maxColumns; column += 1) {
      className = []
      className.push('sudoku-tile')
      if (column === 1) {
        className.push('sudoku-tile-outer-left')
      } else if (column === maxColumns) {
        className.push('sudoku-tile-outer-right')
      } else if (column % regionSize === 0) {
        className.push('sudoku-tile-inner-right')
      } else if (column % regionSize === 1) {
        className.push('sudoku-tile-inner-left')
      }
      if (row === 1) {
        className.push('sudoku-tile-outer-top')
      } else if (row === maxRows) {
        className.push('sudoku-tile-outer-bottom')
      } else if (row % regionSize === 0) {
        className.push('sudoku-tile-inner-bottom')
      } else if (row % regionSize === 1) {
        className.push('sudoku-tile-inner-top')
      }

      region =
        Math.ceil(column / regionSize) +
        Math.floor((row - 1) / regionSize) * regionSize

      newRowContents.push({
        id: `tile-${id}`,
        row,
        column,
        region,
        value,
        candidates,
        tiletext,
        className: className.join(' '),
        active,
        highlight,
        warning,
        locked,
      })

      id += 1
    }

    newBoard.push(
      <div className="sudoku-row" id={`row-${row - 1}`}>
        {newRowContents}
      </div>
    )
  }

  return newBoard
}

export default buildBoard
