function toggleHighlight(tile) {
  const newTile = tile;
  const className = newTile.className.split(' ');

  if (newTile.highlight === 'true') {
    newTile.highlight = 'false';
    className.splice(
      className.findIndex((e) => e === 'sudoku-tile-highlight'),
      1,
    );
  } else {
    newTile.highlight = 'true';
    className.push('sudoku-tile-highlight');
  }

  newTile.className = className.join(' ');

  return newTile;
}

export default toggleHighlight;
