function toggleTileState(currentTile, newEffect) {
  const tile = currentTile;
  const effect = newEffect;
  const className = tile.className.split(' ');

  if (tile[`${effect}`] === 'true') {
    tile[`${effect}`] = 'false';
    className.splice(
      className.findIndex((e) => e === `sudoku-tile-${effect}`),
      1,
    );
  } else {
    tile[`${effect}`] = 'true';
    className.push(`sudoku-tile-${effect}`);
  }

  tile.className = className.join(' ');

  return tile;
}

export default toggleTileState;
