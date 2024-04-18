const totalscore = {computerScore:0,playerScore:0}
function getComputerChoice() {
    const choice=['Rock','Paper','Scissors'];
    let randomN=Math.floor(Math.random()*choice.length)
    return choice[randomN]
}

function getResult(playerChoice, computerChoice) {
  let playerscore = 0;
  let cumputerscore = 0;
  

  if(playerChoice===computerChoice){
    playerscore=0;
    cumputerscore = 0
  }
  else if(playerChoice==='Rock' && computerChoice==='Scissors'){
    playerscore=1;
    cumputerscore = 0
  }
  else if(playerChoice==='Scissors' && computerChoice==='Paper'){
    playerscore=1;
    cumputerscore = 0
  }
  else if(playerChoice==='Paper' && computerChoice==='Rock'){
    playerscore=1;
    cumputerscore = 0;
  }
  else{
    playerscore=0;
    cumputerscore=1;
  }
  
  return {playerscore,cumputerscore}
}

function showResult(playerscore, cumputerscore, playerChoice, computerChoice) {
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  
  handsDiv.innerText = `👤 ${playerChoice}  vs  🤖 ${computerChoice}`
  playerScoreDiv.innerText = `👤 : ${totalscore['playerScore'] }|  🤖: ${totalscore['computerScore']}`
}

function onClickRPS(playerChoice) {
    const computerChoice =getComputerChoice()
    const score=getResult(playerChoice,computerChoice)
    totalscore['playerScore'] += score.playerscore
    totalscore['computerScore'] += score.cumputerscore
    showResult(score.playerscore,score.cumputerscore, playerChoice, computerChoice)
}

function playGame() {
    const rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton =>{
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
})
}

function endGame() {
    totalscore.playerScore=0;
    totalscore.computerScore=0
    const resultDiv = document.getElementById('result')
    resultDiv.innerText = ''
    
    let playerScoreDiv = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScoreDiv.innerText = ''
    hands.innerText = ''
}
function gameResult(){
    const resultDiv = document.getElementById('result')
    let playerScoreDiv = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    playerScoreDiv.innerText = ''
    hands.innerText = ''
    if(totalscore.computerScore>totalscore.playerScore){
        resultDiv.innerText='You Lose!'
      }
      else if(totalscore.playerScore===totalscore.computerScore){
        resultDiv.innerText="Is's a tie!"
      }
      else{
        resultDiv.innerText='You Won!'
      }
}

playGame()