/*
rules and step by step function
1) Cell < 2 Neighbours cell dies (Underpopulation)
2) Cell has exactly 2 or 3 neighbours Cell lives (NextGen)
3) Cell > 3 Neighbours cell dies (Overpopulation)
4) Empty cell has EXACTLY 3 neighbours cell becomes alive (Reproduction)*/

function checkRules(array, cellPosX, cellPosY) {
  let currentCell = array[cellPosX][cellPosY]
  let neighbours = numNeighbours(array, cellPosX, cellPosY)

  if (currentCell) {
    return neighbours === 2 || neighbours === 3
  } else {
    return neighbours === 3
  }
}

function numNeighbours(array, x, y) {
  //check number of neighbours by checking the bounds
  //x+1 = x0 // x - 1 = array.length
  //y+1 = y0 // y - 1 = array.length
  let neighbours = 0

  for (var i = x - 1; i <= x + 1; i++) {
    for (var j = y - 1; j <= y + 1; j++) {
      var currentCellPosition = i === x && j === y
      if (!currentCellPosition && i >= 0 && i <= array.length && j >= 0 && j < array.length && array[i][j]) {
        neighbours += 1
      }
    }
  }
  return neighbours
}

function checkBounds(axis, array) {
  //check x+1 // y + 1
  if(axis + 1 >= array.length) {
    axis = 0
  }

  //check x-1 // y - 1
  if(axis - 1 < -1) {
    axis = array.length - 1
  }
  return axis
}

var refreshIntervalId;
var stepButton = document.getElementById('step')
var autoButton = document.getElementById('auto')
var pauseButton = document.getElementById('pause')

//rendering to screen needs to be resolved
stepButton.addEventListener('click', function(event) {
  stepForward();
});

autoButton.addEventListener('click', function(event) {
  autoPlay();
});

pauseButton.addEventListener('click', function(event) {
  pause();
});

function stepForward() {
  let tempGridArray = new Array(gridArray.length)
  for (let i = 0; i < tempGridArray.length; i++) {
    tempGridArray[i] = []
  }

  let x, y = 0
  for(x = 0; x < gridArray.length - 1; x++) {
    for(y = 0; y < gridArray.length - 1; y++) {
      tempGridArray[x][y] = checkRules(gridArray, x, y)
    }
  }

  gridArray = tempGridArray
  rerender(gridArray)
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

function rerender(array) {
  for(let i = 0; i < array.length - 1; i++) {
    for(let j = 0; j < array.length - 1; j++) {
      let cell = document.getElementById(`${i}:${j}`)
      cell.innerHTML = array[i][j]
      colourChange(cell)
    }
  }
}
