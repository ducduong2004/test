const computerChoice = Math.floor(Math.random() * 3) + 1;
function getComputerChoice(a) {
  switch(a){
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
    }
}

function gameFunction(pChoice, cChoice){

  pChoice = pChoice.toUpperCase();

  if(pChoice == "ROCK"){
    switch(cChoice){
      case "Rock":
        return "tie";
      case "Paper":
        return "lost";
      case "Scissors":
        return "won";
    }
  }
  else if(pChoice == "PAPER"){
    switch(cChoice){
      case "Rock":
        return "won";
      case "Paper":
        return "Tie";
      case "Scissors":
        return "lost";
    }
  }
    else if(pChoice == "SCISSORS"){
      switch(cChoice){
        case "Rock":
          return "lost";
        case "Paper":
          return "won";
        case "Scissors":
          return "Tie";
      }
  }
}

let pChoice = prompt();
let cChoice = getComputerChoice(computerChoice);
console.log(gameFunction(pChoice,cChoice));
console.log(cChoice);
console.log(pChoice);





