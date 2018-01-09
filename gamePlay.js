/*
rules and step by step function
1) Cell < 2 Neighbours cell dies (Underpopulation)
2) Cell has exactly 2 or 3 neighbours Cell lives (NextGen)
3) Cell > 3 Neighbours cell dies (Overpopulation)
4) Empty cell has EXACTLY 3 neighbours cell becomes alive (Reproduction)*/
function checkRules(cellPosX, cellPosY) {
  let currentCell = gridArray[cellPosX][cellPosY]
  var cellsAlive = 0;
  let toIntX = parseInt(cellPosX);
  let toIntY = parseInt(cellPosY);
  if (currentCell && gridArray[toIntX + 1] != null && gridArray[toIntY + 1] != null && gridArray[toIntX - 1] != null && gridArray[toIntY - 1]) {
    if (gridArray[toIntX + 1][toIntY + 1]) {cellsAlive += 1}
    if (gridArray[toIntX + 1][toIntY]) {cellsAlive += 1}
    if (gridArray[cellPosX][toIntY + 1]) {cellsAlive += 1}
    if (gridArray[toIntX - 1][toIntY - 1]) {cellsAlive += 1}
    if (gridArray[toIntX - 1][toIntY]) {cellsAlive += 1}
    if (gridArray[cellPosX][toIntY - 1]) {cellsAlive += 1}
    if (gridArray[toIntX + 1][toIntY - 1]) {cellsAlive += 1}
    if (gridArray[toIntX - 1][toIntY + 1]) {cellsAlive += 1}
    if (cellsAlive < 2) {currentCell = false; console.log("Underpopulation")} //Underpopulation
    if (cellsAlive === 2 || cellsAlive === 3) {currentCell = true; console.log("NextGen")} //NextGen
    if (cellsAlive > 3) {currentCell = false; console.log("Overpopulation")} //Overpopulation
    console.log(cellsAlive)
  } else if(!currentCell && gridArray[toIntX + 1] != null && gridArray[toIntY + 1] != null && gridArray[toIntX - 1] != null && gridArray[toIntY - 1]) {
    if (gridArray[toIntX + 1][cellPosY + 1]) {cellsAlive += 1}
    if (gridArray[toIntX + 1][cellPosY]) {cellsAlive += 1}
    if (gridArray[toIntX][toIntY + 1]) {cellsAlive += 1}
    if (gridArray[toIntX - 1][toIntY - 1]) {cellsAlive += 1}
    if (gridArray[toIntX - 1][cellPosY]) {cellsAlive += 1}
    if (gridArray[toIntX][toIntY - 1]) {cellsAlive += 1}
    if (gridArray[toIntX + 1][toIntY - 1]) {cellsAlive += 1}
    if (gridArray[toIntX - 1][toIntY + 1]) {cellsAlive += 1}
    if (cellsAlive === 3) {currentCell = true; console.log("Reproduction")} //Reproduction
  }
}
