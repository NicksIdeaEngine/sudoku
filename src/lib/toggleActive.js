function toggleActive(tile) {
  const newTile = tile;
  const className = newTile.className.split(' ');

  if (newTile.active === 'true') {
    newTile.active = 'false';
    className.splice(
      className.findIndex((e) => e === 'sudoku-tile-active'),
      1,
    );
  } else {
    newTile.active = 'true';
    className.push('sudoku-tile-active');
  }

  newTile.className = className.join(' ');

  return newTile;
}

export default toggleActive;
