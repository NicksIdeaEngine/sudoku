function toggleWarning(tile) {
  const newTile = tile;
  const className = newTile.className.split(' ');

  if (newTile.warning === 'true') {
    newTile.warning = 'false';
    className.splice(
      className.findIndex((e) => e === 'sudoku-tile-warning'),
      1,
    );
  } else {
    newTile.warning = 'true';
    className.push('sudoku-tile-warning');
  }

  newTile.className = className.join(' ');

  return newTile;
}

export default toggleWarning;
