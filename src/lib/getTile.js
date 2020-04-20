function getTile(currentBoard, id) {
  const board = currentBoard;
  const idNum = parseInt(id.slice(5), 10);
  const row = Math.floor(idNum / 9);
  const column = idNum % 9;
  const tile = board[row].props.children[column];
  return tile;
}

export default getTile;
