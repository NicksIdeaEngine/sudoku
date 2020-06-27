/* eslint-disable */
import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'

const GameContext = createContext()

export const GameContextProvider = ({ children }) => {
  const [gameSettings, setGameSettings] = useState({
    difficulty: 'easy',
    theme: 'default',
  })

  const value = { gameSettings }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

GameContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

const useGameContext = () => {
  return useContext(GameContext)
}

export default useGameContext
