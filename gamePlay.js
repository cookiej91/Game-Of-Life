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

var refreshIntervalId;
var stepButton = document.getElementById('step')
var autoButton = document.getElementById('auto')
var pauseButton = document.getElementById('pause')

//rendering to screen needs to be resolved
stepButton.addEventListener('click', function(event) {
  console.log("stepping forward")
});

autoButton.addEventListener('click', function(event) {
  autoPlay();
});

pauseButton.addEventListener('click', function(event) {
  pause();
});

function stepForward() {
  //checkRules(x, y);
  console.log("stepping forward")
}

function autoPlay() {
  console.log("auto")
  refreshIntervalId = setInterval(function() {stepForward()}, 2000);
}

function pause() {
  console.log("pause")
  clearInterval(refreshIntervalId);
}
