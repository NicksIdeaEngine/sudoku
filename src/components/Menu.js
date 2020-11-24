import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import useGameContext from '../utils/useGameContext'

const MenuContainer = styled.section`
  // {{{
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1em 1em 1em 0;
  border: 2px solid red;
`

const MenuHeader = styled.h3`
  width: 100%;
  text-align: center;
` // }}}

// eslint-disable-next-line no-unused-vars
function Menu({ boardState }) {
  const { gameSettings } = useGameContext()
  return (
    <MenuContainer className="menu-container">
      <MenuHeader>Current Difficulty: {gameSettings.difficulty}</MenuHeader>
    </MenuContainer>
  )
}

Menu.propTypes = {
  boardState: PropTypes.node.isRequired,
}

export default Menu
