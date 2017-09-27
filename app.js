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

/*
//Underpopulation
if(cell < 2 neighbours) {
  cell = 0;
}

//NextGen
if(cell == 2 neighbours) {
  cell = 1;
}

//Overpopulation
if(cell > 3 neighbours) {
  cell = 0;
}

//Reproduction will also have NextGen logic built in
if(cell == 3 neighbours) {
  cell = 1;
  cell.child = 1;
}

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
