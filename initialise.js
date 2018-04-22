/* The Game Of Life
Boolean:
1 == Cell is alive
0 == Cell is Dead
*/
// declare bool values to set cell to on or off
var dead = false
var alive = true

//declare gridArray
var gridArray = []

//populate grid with cells takes height and width
function populateGrid(height, width) {
  let gameDiv = document.getElementById('gamePlay')

  for (let i = 0; i < height; i++) {
    gridArray[i] = []
    let row = document.createElement('div')
    row.className = "inline"
    gameDiv.appendChild(row)

    for (let j = 0; j < width; j++) {
      let cell = document.createElement('div')
      cell.id = `${i}:${j}`
      gridArray[i][j] = dead
      cell.innerHTML = gridArray[i][j]
      colourChange(cell)
      cell.setAttribute('x', `${i}`)
      cell.setAttribute('y', `${j}`)
      row.appendChild(cell)
      cell.addEventListener('click', function(event) {
        let x = event.currentTarget.getAttribute('x')
        let y = event.currentTarget.getAttribute('y')
        gridArray[x][y] = !gridArray[x][y]
        render(x,y)
      });
    }
  }
}
//rendering to view from model
function render(cellPosX, cellPosY) {
  let cell = document.getElementById(`${cellPosX}:${cellPosY}`)
  cell.innerHTML = gridArray[cellPosX][cellPosY]
  colourChange(cell)
}

//To enhance viewability the colourChange function provides
//alive cells to have green text and dead cells to have red text
function colourChange(cell) {
  if(cell.innerHTML == 'false') {
    cell.style.color = "red"
  } else {
    cell.style.color = "green"
  }
}

populateGrid(20, 20)
