function render(cellPosX, cellPosY) {
  let cell = document.getElementById(`${cellPosX}:${cellPosY}`);
  cell.innerHTML = gridArray[cellPosX][cellPosY];
}
