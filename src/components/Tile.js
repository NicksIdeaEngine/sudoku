/* eslint-disable jsx-a11y/click-events-have-key-events */
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
      tiletext,
      className,
      active,
      highlight,
      warning,
      locked,
      handleClick,
    } = this.props;

    return (
      <button
        type="button"
        id={id}
        row={row}
        column={column}
        region={region}
        value={value}
        candidates={candidates}
        tiletext={tiletext}
        className={className}
        active={active}
        highlight={highlight}
        warning={warning}
        locked={locked}
        onClick={() => handleClick(id)}
      >
        {tiletext}
      </button>
    );
  }
}

const getTile = (currentBoard, id) => {
  const board = currentBoard;
  const idNum = parseInt(id.slice(5), 10);
  const row = Math.floor(idNum / 9);
  const column = idNum % 9;
  const tile = board[row].props.children[column];
  return tile;
};

const getTileText = (tile) => {
  const { value, candidates, id } = tile;
  let displayText = '';
  const tiletext = [];
  const displayTextClassList = [];
  let candidateKey = '';
  let keyCounter = 0;

  if (value >= 1 && value <= 9) {
    tiletext.push(value);
    displayTextClassList.push('sudoku-tile-value');
  } else {
    candidates.forEach((currentRow) => {
      currentRow.forEach((candidate) => {
        candidateKey = `tile-${id}-candidate-text-${keyCounter}`;
        keyCounter += 1;
        const newCandidate =
          candidate === ' ' ? (
            <div key={candidateKey} className="sudoku-tile-candidate-text">
              &nbsp;
            </div>
          ) : (
            <div key={candidateKey} className="sudoku-tile-candidate-text">
              {candidate}
            </div>
          );
        tiletext.push(newCandidate);
        return newCandidate;
      });
    });
    displayTextClassList.push('sudoku-tile-candidate');
  }

  displayText = (
    <div
      id={`tile-text-${id}`}
      key={`tile-text-${id}`}
      className={displayTextClassList.join(' ')}
    >
      {tiletext}
    </div>
  );

  return displayText;
};

export { getTile, getTileText };

Tile.propTypes = {
  id: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
  region: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  candidates: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
  tiletext: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
  highlight: PropTypes.string.isRequired,
  warning: PropTypes.string.isRequired,
  locked: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tile;
