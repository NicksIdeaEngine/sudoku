import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const GameContext = createContext()

export const GameContextProvider = ({ children }) => {
  const [gameData, setGameData] = useState()

  setGameData({ difficulty: 'easy' })

  const value = { gameData }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const useGameContext = () => {
  return useContext(GameContext)
}

export default useGameContext
