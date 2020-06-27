/* eslint-disable */
import React from 'react'
import styled from '@emotion/styled'

import useGameContext from '../utils/useGameContext'
import MenuButton from './MenuButton'

const MenuContainer = styled.section`
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
`

function Menu() {
  const { gameSettings, currentBoard } = useGameContext()
  return (
    <MenuContainer className="menu-container">
      <MenuHeader>Current Difficulty: {gameSettings.difficulty}</MenuHeader>
      <MenuButton />
    </MenuContainer>
  )
}

export default Menu
