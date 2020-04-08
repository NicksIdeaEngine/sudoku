/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

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

export default Tile;
