/* eslint-disable */
import { useState } from 'react'
import createEmptyBoard from '../lib/createEmptyBoard'

const updateBoard = (boardState) => {
  return boardState.map((row) => [...row])
}

const useBoardState = () => {
  const [boardState, setBoardState] = useState(createEmptyBoard())

  const resetBoard = () => {
    setBoardState(createEmptyBoard())
  }

  return { boardState, resetBoard }
}

export default useBoardState
