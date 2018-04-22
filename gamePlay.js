/*rules and step by step function
1) Cell < 2 Neighbours cell dies (Underpopulation)
2) Cell has exactly 2 or 3 neighbours Cell lives (NextGen)
3) Cell > 3 Neighbours cell dies (Overpopulation)
4) Empty cell has EXACTLY 3 neighbours cell becomes alive (Reproduction)*/

function checkRules(array, cellPosX, cellPosY) {
  let currentCell = array[cellPosX][cellPosY]
  let neighbours = numNeighbours(array, cellPosX, cellPosY)
  if (currentCell) {
    return neighbours === 2 || neighbours === 3
  } else if(!currentCell && neighbours !== 3) {
    return false
  } else {
    return neighbours === 3
  }


}

//by checking the number of neighbours this will be able to give an
//accurate response to the next state the currentCell should be in
function numNeighbours(array, x, y) {
  //check number of neighbours by checking the bounds
  //x+1 = x0 // x - 1 = array.length
  //y+1 = y0 // y - 1 = array.length
  checkBounds()
  let neighbours = 0

  for (var i = x - 1; i <= x + 1; i++) {
    for (var j = y - 1; j <= y + 1; j++) {
      var currentCellPosition = i === x && j === y
      if (!currentCellPosition && i >= 0 && i < array.length && j >= 0 && j < array.length && array[i][j]) {
        neighbours += 1
      }
    }
  }
  return neighbours
}

//checking bounds to wrap existing array onto itself which will in itself be torus
function newAxisValue(axis, array) {
  //check x+1 // y + 1
  if(axis + 1 >= array.length - 1) {
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

//event listeners
stepButton.addEventListener('click', function(event) {
  stepForward();
});

autoButton.addEventListener('click', function(event) {
  autoPlay();
});

pauseButton.addEventListener('click', function(event) {
  pause();
});

//stepForward populates the new gridArray by checking the rules against the old array and populating results from that
function stepForward() {
  let tempGridArray = new Array(gridArray.length)
  for (let i = 0; i < gridArray.length; i++) {
    tempGridArray[i] = []
  }

  for(let x = 0; x <= gridArray.length - 1; x++) {
    for(let y = 0; y <= gridArray.length - 1; y++) {
      tempGridArray[x][y] = checkRules(gridArray, x, y)
    }
  }
  debugger
  gridArray = tempGridArray
  rerender(gridArray)
  console.log("stepping forward")
}

function autoPlay() {
  console.log("auto")
  refreshIntervalId = setInterval(function() {stepForward()}, 2000)
}

//pause() stops the autoPlay()
function pause() {
  console.log("pause")
  clearInterval(refreshIntervalId)
}

//rerendering the grid after new gridArray has been populated with correct results
function rerender(array) {
  for(let i = 0; i <= array.length - 1; i++) {
    for(let j = 0; j <= array.length - 1; j++) {
      let cell = document.getElementById(`${i}:${j}`)
      cell.innerHTML = array[i][j]
      colourChange(cell)
    }
  }
}
