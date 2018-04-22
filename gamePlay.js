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
  } else {
    return neighbours === 3
  }
}

//by checking the number of neighbours this will be able to give an
//accurate response to the next state the currentCell should be in
function numNeighbours(array, x, y) {
  let neighbours = 0

  for (var i = x - 1; i <= x + 1; i++) {
    newPositionX = wrapPosition(i, array)
    for (var j = y - 1; j <= y + 1; j++) {
      debugger
      newPositionY = wrapPosition(j, array)
      var currentCellPosition = i === x && j === y
      if (!currentCellPosition && array[newPositionX][newPositionY]) {
        neighbours += 1
      }
    }
  }
  return neighbours
}

function wrapPosition(position, array) {
  if (position > array.length - 1) {
    position = 0
  }

  if (position < 0) {
    position = array.length - 1
  }
  return position
}

var refreshIntervalId;
var stepButton = document.getElementById('step')
var autoButton = document.getElementById('auto')
var pauseButton = document.getElementById('pause')

//event listeners
stepButton.addEventListener('click', function(event) {
  stepForward()
})

autoButton.addEventListener('click', function(event) {
  autoPlay()
})

pauseButton.addEventListener('click', function(event) {
  pause()
})

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
  gridArray = tempGridArray
  rerender(gridArray)
}

function autoPlay() {
  refreshIntervalId = setInterval(function() {stepForward()}, 250)
}

//pause() stops the autoPlay()
function pause() {
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
