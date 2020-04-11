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
      row,
      column,
      region,
      value,
      id,
      candidates,
      classNames,
      style,
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
        className={classNames}
        value={value}
        style={style}
        row={row}
        column={column}
        region={region}
        id={id}
        candidates={candidates}
        onClick={() => handleClick(id)}
      >
        <div className="sudoku-tile-text">{tileText}</div>
      </div>
    );
  }
}

Tile.propTypes = {
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  region: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  candidates: PropTypes.arrayOf(PropTypes.number).isRequired,
  classNames: PropTypes.string.isRequired,
  style: PropTypes.shape({
    left: PropTypes.string,
    top: PropTypes.string,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tile;
