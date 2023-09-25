// SECTION VARIABLES

let homeScore = 0
let awayScore = 0
const winScore = 25

// !SECTION



// SECTION FUNCTIONS

function addPoints(teamName, points) {
  console.log('Button Clicked!');
  if (teamName == 'Home') {
    homeScore += points
  }
  else if (teamName == 'Away') {
    awayScore += points
  }
  else {
    throw console.error('Team Name does not exist');
  }
  displayScore()

  if (homeScore >= winScore)
    displayWinner('Home')
  else if (awayScore >= winScore)
    displayWinner('Away')
}


function removePoints(teamName, points) {
  if (teamName == 'Home') {
    homeScore -= points
    if (homeScore < 0)
      homeScore = 0
  }
  else if (teamName == 'Away') {
    awayScore -= points
    if (awayScore < 0)
      awayScore = 0
  }
  else {
    throw console.error('Team Name does not exist');
  }
  displayScore()
}


function displayScore() {
  let homeScoreElement = document.getElementById('homeScore')
  let awayScoreElement = document.getElementById('awayScore')
  //@ts-ignore
  homeScoreElement.innerText = homeScore
  //@ts-ignore
  awayScoreElement.innerText = awayScore
}


function displayWinner(winner) {
  if (winner == 'Home')
    window.alert('Home team WINS!')
  else if (winner == 'Away')
    window.alert('Away team WINS!')
  else
    throw console.error('Team Name does not exist');
  resetGame()
}


function resetGame() {
  homeScore = 0
  awayScore = 0
  displayScore()
}

// !SECTION


displayScore()