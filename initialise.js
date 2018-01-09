/* The Game Of Life

Boolean:
1 == Cell is alive
0 == Cell is Dead
*/
// declare bool values to set cell to on or off
var dead = false;
var alive = true;

//declare gridArray
var gridArray = [];

//populate grid with cells takes height and width
function populateGrid(height, width) {
  for (let i = 0; i < height; i++) {
    gridArray[i] = [];
    let row = document.createElement('div');
    row.className = "inline";
    document.body.appendChild(row);

    for (let j = 0; j < width; j++) {
      let cell = document.createElement('div');
      cell.id = `${i}:${j}`
      gridArray[i][j] = dead;
      cell.innerHTML = gridArray[i][j];
      cell.setAttribute('x', `${i}`)
      cell.setAttribute('y', `${j}`)
      row.appendChild(cell)
      cell.addEventListener('click', function(event) {
        let x = event.currentTarget.getAttribute('x');
        let y = event.currentTarget.getAttribute('y');
        gridArray[x][y] = !gridArray[x][y]
        render(x,y);
      });
    }
  }
}

function render(cellPosX, cellPosY) {
  let cell = document.getElementById(`${cellPosX}:${cellPosY}`);
  cell.innerHTML = gridArray[cellPosX][cellPosY];
}

/*
rules and step by step function
1) Cell < 2 Neighbours cell dies (Underpopulation)
2) Cell has exactly 2 or 3 neighbours Cell lives (NextGen)
3) Cell > 3 Neighbours cell dies (Overpopulation)
4) Empty cell has EXACTLY 3 neighbours cell becomes alive (Reproduction)*/
function checkRules(cellPosX, cellPosY) {
  let currentCell == gridArray[cellPosX][cellPosY]
  let cellsAlive = 0;
  if (currentCell){
    if (gridArray[cellPosX + 1][cellPosY + 1]) {cellsAlive + 1}
    if (gridArray[cellPosX + 1][cellPosY]) {cellsAlive + 1}
    if (gridArray[cellPosX][cellPosY + 1]) {cellsAlive + 1}
    if (gridArray[cellPosX - 1][cellPosY - 1]) {cellsAlive + 1}
    if (gridArray[cellPosX - 1][cellPosY]) {cellsAlive + 1}
    if (gridArray[cellPosX][cellPosY - 1]) {cellsAlive + 1}
    if (cellsAlive < 2) {currentCell = false} //Underpopulation
    if (cellsAlive === 2 || cellsAlive === 3) {currentCell = true} //NextGen
    if (cellsAlive > 3) {currentCell = false} //Overpopulation
  } else if(!currentCell) {
    if (gridArray[cellPosX + 1][cellPosY + 1]) {cellsAlive + 1}
    if (gridArray[cellPosX + 1][cellPosY]) {cellsAlive + 1}
    if (gridArray[cellPosX][cellPosY + 1]) {cellsAlive + 1}
    if (gridArray[cellPosX - 1][cellPosY - 1]) {cellsAlive + 1}
    if (gridArray[cellPosX - 1][cellPosY]) {cellsAlive + 1}
    if (gridArray[cellPosX][cellPosY - 1]) {cellsAlive + 1}
    if (cellsAlive === 3) {currentCell = true} //Reproduction
  }
}
populateGrid(20,20);
