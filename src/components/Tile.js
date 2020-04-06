/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

function Tile(props) {
  const region = 1;
  let value;
  const candidates = [1, 2, 3];
  const puzzleArr = [];
  const { id } = props;

  for (let i = 1; i <= 9; i += 1) {
    for (let j = 1; j <= 9; i += 1) {
      value = Math.floor(Math.random() * Math.floor(9));
      const tile = {
        row: j,
        column: i,
        region,
        value,
        candidates,
      };
      puzzleArr.push(tile);
    }
  }
  const fullPuzzle = puzzleArr.map((tile) => (
    <Tile
      key={tile.id}
      id={tile.id}
      value={tile.value}
      row={tile.row}
      column={tile.column}
      region={tile.region}
      candidates={tile.candidates}
    />
  ));

  return (
    <div
      className="sudoku-tile"
      id={`tile-${id}`}
      role="cell"
      onClick={() => props.handleChange(id)}
      onKeyPress={() => props.handleChange(id)}
      onFocus={() => props.handleChange(id)}
    >
      <div className="sudoku-tile-text">{fullPuzzle}</div>
    </div>
  );
}

Tile.props.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Tile;
