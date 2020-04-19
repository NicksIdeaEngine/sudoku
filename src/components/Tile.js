/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      id,
      row,
      column,
      region,
      value,
      candidates,
      className,
      active,
      highlight,
      handleClick,
    } = this.props;

    let tileText = '';

    if (value >= 1 || value <= 9) {
      tileText = value;
    } else {
      tileText = candidates;
    }

    return (
      <div
        id={id}
        row={row}
        column={column}
        region={region}
        value={value}
        candidates={candidates}
        className={className}
        active={active}
        highlight={highlight}
        onClick={() => handleClick(id)}
      >
        <div className="sudoku-tile-text">{tileText}</div>
      </div>
    );
  }
}

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  region: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.number).isRequired,
  className: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tile;
