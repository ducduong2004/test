function getComputerChoice(a) {
  switch(a){
    case 1:
      return 'ROCK';
    case 2:
      return 'PAPER';
    case 3:
      return 'SCISSORS';
    }
}

function gameFunction(pChoice){
  console.log(pChoice);
  if(pChoice === '') return '';
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  let cChoice = getComputerChoice(computerChoice);
  

  pChoice = pChoice.toUpperCase();

  if(pChoice === cChoice){
    return 'tie';
  } else if(
    cChoice === 'ROCK' && pChoice === 'PAPER' || 
    cChoice === 'PAPER' && pChoice ==='SCISSORS' || 
    cChoice === 'SCISSORS' && pChoice ==='ROCK') {
    return 'won';
  } else return 'lost';
  
}

let btns = document.querySelectorAll('.selection');
let result = document.querySelector('#result');
let score = document.querySelector('#Scoreboard p:nth-child(1)');
let round = document.querySelector('#Scoreboard p:nth-child(2)');
let scoreb = 0;
let roundNum = 0;

btns.forEach(e => {
e.addEventListener('click', (e) => {
    let matchResult = gameFunction(e.target.id);
    result.innerHTML = matchResult;
  
    roundNum++;
    round.innerHTML = 'Round: ' + roundNum;
  
    if(matchResult === 'won')
      {
        scoreb++;
        score.innerHTML = 'Score: ' + scoreb;
      }

  
  });

});

