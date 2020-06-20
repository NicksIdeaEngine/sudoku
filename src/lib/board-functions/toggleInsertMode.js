import toggleTileState from './toggleTileState'
import { clearHighlight } from './changeBoardState'

function toggleInsertMode(prevState, value) {
  clearHighlight(prevState)
  const { currentBoard } = prevState
  let { insertMode } = prevState
  let classList

  if (value === 'remove') {
    classList = document.getElementById('menu-number-remove-btn').classList
    if (insertMode === '0') {
      classList.remove('menu-number-button-active')
      insertMode = ''
    } else {
      classList.add('menu-number-button-active')
      insertMode = '0'
    }
  } else if (value === 'switch') {
    classList = document.getElementById('menu-number-switch-btn').classList
    if (insertMode === 'switch') {
      classList.remove('menu-number-button-active')
      insertMode = ''
    } else {
      classList.add('menu-number-button-active')
      insertMode = 'switch'
    }
  } else if (insertMode === value) {
    classList = document.getElementById(`menu-number-btn-${value - 1}`)
      .classList
    insertMode = ''
    classList.remove('menu-number-button-active')
    clearHighlight(prevState)
  } else {
    classList = document.getElementById(`menu-number-btn-${value - 1}`)
      .classList
    insertMode = value
    currentBoard.forEach((currentRow) => {
      currentRow.props.children.forEach((currentTile) => {
        if (currentTile.value === insertMode) {
          toggleTileState(currentTile, 'highlight')
        }
      })
    })
    classList.add('menu-number-button-active')
  }

  return { currentBoard, insertMode }
}

export default toggleInsertMode
