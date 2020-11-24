import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import gruv from '../assets/palettes/gruvbox-light.scss'

const TileContainer = styled.button`
  // {{{
  font-size: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  padding: 0.75em;
  margin: 0.1em;
  border: 2px solid ${gruv.fg4};
  background-color: ${gruv.bg2};
` // }}}

// const handleClick = () => { }

const Tile = ({ id, row, column, tileText, className }) => {
  return (
    <TileContainer
      id={id}
      row={row}
      column={column}
      tileText={tileText}
      className={className}
    >
      <p>{tileText}</p>
    </TileContainer>
  )
}

Tile.propTypes = {
  // {{{
  id: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  tileText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default Tile
