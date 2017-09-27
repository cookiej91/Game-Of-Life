/* The Game Of Life
1) Cell < 2 Neighbours cell dies (Underpopulation)
2) Cell has exactly 2 or 3 neighbours Cell lives (NextGen)
3) Cell > 3 Neighbours cell dies (Overpopulation)
4) Empty cell has EXACTLY 3 neighbours cell becomes alive (Reproduction)

Boolean:
1 == Cell is alive
0 == Cel is Dead
*/

var cell;

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
