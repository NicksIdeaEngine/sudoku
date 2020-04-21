/* eslint-disable no-unused-vars */
function toggleTileState(tile, effect) {
  const newTile = tile;
  const className = newTile.className.split(' ');

  if (newTile[`${effect}`] === 'true') {
    newTile[`${effect}`] = 'false';
    className.splice(
      className.findIndex((e) => e === `sudoku-tile-${effect}`),
      1,
    );
  } else {
    newTile[`${effect}`] = 'true';
    className.push(`sudoku-tile-${effect}`);
  }

  newTile.className = className.join(' ');

  return newTile;
}

export default toggleTileState;
