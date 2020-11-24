import { useState } from 'react'
import createEmptyBoard from '../lib/createEmptyBoard'

const useBoardState = () => {
  // eslint-disable-next-line no-unused-vars
  const [boardState, setBoardState] = useState(createEmptyBoard())

  return { boardState }
}

export default useBoardState
