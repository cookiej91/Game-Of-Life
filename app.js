/* The Game Of Life
1) Cell < 2 Neighbours cell dies (Underpopulation)
2) Cell has exactly 2 or 3 neighbours Cell lives (NextGen)
3) Cell > 3 Neighbours cell dies (Overpopulation)
4) Empty cell has EXACTLY 3 neighbours cell becomes alive (Reproduction)

Boolean:
1 == Cell is alive
0 == Cell is Dead
*/

//display grid on canvas
var canvas = document.getElementById("canvas");
function display() {

};

//grid dimensions
var height = 0;
var width = 0;

//populate grid with cells
function populateGrid() {
  for (var r = 0; r < height; r++) {
    for (var c = 0; c < width; c++) {
      grid[r][c]
    }
  }
}

function neighbourState(cell, neighbour) {
  //check neighbour states and if they fit the condition change accordingly
  //if the cell is live then check GoL conditions
  if(cell = 1) {
    if(neighbour < 2) {
      cell = 0;
    } else if(neighbour === 2) {
      cell = 1;
    } else if(neighbour > 3) {
      cell = 0;
    } else if(neighbour === 3) {
      cell = 1;
    }
  }

  else if (cell = 0 && neighbour === 3) {
    cell = 1
  }
}

/*
Neighbours:
cell[height][width] = current cell

[h-1][w-1] = top left
[h-1][w] = top centre
[h-1][w+1] = top right

[h][w-1] middle left
[h][w+1] middle right

[h+1][w-1] bottom left
[h+1][w]  bottom centre
[h+1][w+1] bottom right
*/
