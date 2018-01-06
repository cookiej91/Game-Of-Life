/* The Game Of Life
1) Cell < 2 Neighbours cell dies (Underpopulation)
2) Cell has exactly 2 or 3 neighbours Cell lives (NextGen)
3) Cell > 3 Neighbours cell dies (Overpopulation)
4) Empty cell has EXACTLY 3 neighbours cell becomes alive (Reproduction)

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

populateGrid(20,20);
