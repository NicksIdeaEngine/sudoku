/* eslint-disable */
import React from 'react'
import styled from '@emotion/styled'

// import useGameContext from '../utils/useGameContext'
import useBoardState from '../utils/useBoardState'

import gruv from '../assets/palettes/gruvbox-light.scss'

const GameboardContainer = styled.section`
  //{
  display: flex;
  flex: 2;
  justify-content: center;
  align-content: center;
  margin: 1em;
  border: 2px solid green;

  .gameboard-row {
    display: flex;
    flex-flow: row wrap;

    &:nth-of-type(3),
    &:nth-of-type(6) {
      margin-bottom: 0.5em;
      .gameboard-tile {
        border-bottom: 2px solid ${gruv.fg0};
      }
    }
    &:nth-of-type(4),
    &:nth-of-type(7) {
      .gameboard-tile {
        border-top: 2px solid ${gruv.fg0};
      }
    }

    &:nth-of-type(1) {
      .gameboard-tile {
        border-top: 2px solid ${gruv.red};
      }
    }

    &:nth-of-type(9) {
      .gameboard-tile {
        border-bottom: 2px solid ${gruv.red};
      }
    }

    .gameboard-tile:nth-of-type(1) {
      border-left: 2px solid ${gruv.red};
    }

    .gameboard-tile:nth-of-type(9) {
      border-right: 2px solid ${gruv.red};
    }

    .gameboard-tile:nth-of-type(3),
    .gameboard-tile:nth-of-type(6) {
      margin-right: 0.5em;
      border-right: 2px solid ${gruv.fg0};
    }
    .gameboard-tile:nth-of-type(4),
    .gameboard-tile:nth-of-type(7) {
      border-left: 2px solid ${gruv.fg0};
    }
  }
` //}

function Gameboard() {
  // const { gameSettings } = useGameContext()
  const { boardState, resetBoard } = useBoardState()

  return (
    <GameboardContainer className="gameboard-container">
      <div className="gameboard">{boardState}</div>
    </GameboardContainer>
  )
}

export default Gameboard