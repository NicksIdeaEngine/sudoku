import toggleTileState from './toggleTileState'
import { getTile } from '../../components/Tile'

const clearHighlight = (prevState) => {
  const { currentBoard } = prevState
  const insertMode = ''
  let classList

  currentBoard.forEach((currentRow) => {
    currentRow.props.children.forEach((currentTile) => {
      const newTile = currentTile
      const { className } = newTile
      const splitClassName = className.split(' ')
      const effects = ['active', 'highlight', 'warning']

      effects.forEach((effect) => {
        if (newTile[`${effect}`] === 'true') {
          newTile[`${effect}`] = 'false'
          splitClassName.splice(
            splitClassName.findIndex((e) => e === `sudoku-tile-${effect}`),
            1
          )
        }
      })

      newTile.className = splitClassName.join(' ')
      return newTile
    })
    return currentRow
  })

  for (let i = 1; i <= 9; i += 1) {
    classList = document.getElementById(`menu-number-btn-${i - 1}`).classList
    classList.remove(`menu-number-button-active`)
  }

  return { currentBoard, insertMode }
}

const clearBoard = (prevState) => {
  const { currentBoard, insertMode } = clearHighlight(prevState)
  currentBoard.forEach((row) => {
    row.props.children.forEach((tile) => {
      const newTile = tile
      newTile.value = '0'
      newTile.locked = 'false'
      return newTile
    })
  })
  return { currentBoard, insertMode }
}

const highlightRelatedTiles = (prevState, id) => {
  const { currentBoard } = prevState
  const tile = getTile(currentBoard, id)

  currentBoard.forEach((currentRow) => {
    currentRow.props.children.forEach((currentTile) => {
      if (currentTile.id !== tile.id) {
        if (
          currentTile.row === tile.row ||
          currentTile.column === tile.column ||
          currentTile.region === tile.region ||
          (currentTile.value === tile.value && currentTile.value !== '0')
        ) {
          toggleTileState(currentTile, 'highlight')
        }
      }
    })
  })

  return { currentBoard }
}

export { clearBoard, clearHighlight, highlightRelatedTiles }
