/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

// import color from '../assets/palettes/material.scss'
import gruv from '../assets/palettes/gruvbox-light.scss'

const TileContainer = styled.button`
  //{{{
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  padding: 0.75em;
  margin: 0.1em;
  border: 2px solid ${gruv.fg4};
  background-color: ${gruv.bg2};
` //}}}

const Tile = (props) => {
  const {
    id,
    row,
    column,
    region,
    value,
    candidates,
    tileText,
    className,
    status,
  } = props

  return (
    <TileContainer
      key={id}
      id={id}
      row={row}
      column={column}
      region={region}
      value={value}
      candidates={candidates}
      tileText={tileText}
      className={className}
      status={status}
    >
      <p>{tileText}</p>
    </TileContainer>
  )
}

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  region: PropTypes.number.isRequired,
  value: PropTypes.string,
  candidates: PropTypes.arrayOf(PropTypes.number).isRequired,
  tileText: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  status: PropTypes.shape({
    locked: PropTypes.bool.isRequired,
    active: PropTypes.bool.isRequired,
    highlight: PropTypes.bool.isRequired,
    warning: PropTypes.bool.isRequired,
  }).isRequired,
}

Tile.defaultProps = {
  value: '',
}

export default Tile
