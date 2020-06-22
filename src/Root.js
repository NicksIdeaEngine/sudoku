import React from 'react'
import PropTypes from 'prop-types'
import GlobalStyles from './styles/GlobalStyles'
import { GameContextProvider } from './utils/useGameContext'

const Root = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <GameContextProvider>{children}</GameContextProvider>
    </>
  )
}

Root.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Root
