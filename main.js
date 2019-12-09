


let totalPlayerScore = 0;
let totalComputerScore = 0;
let playerCurrentChoise = "";
let computerCurrentChoise = "";
const winner = document.querySelector(".winner");
const playerHand = document.querySelector(".player-hand");
const computerHand = document.querySelector(".computer-hand");
const match = document.querySelector(".match");
const score = document.querySelector(".score");


const options = ["paper", "rock", "scissors"]

function init() {
// score.style.display = "none";
// match.style.display = "none";
score.classList.add("nondisplay");
match.classList.add("nondisplay");

}
init();

function startPlaying() {
  score.classList.remove("nondisplay");
  match.classList.remove("nondisplay");
  document.querySelector(".start").classList.add("nondisplay")

}


const start = document.querySelector(".start").addEventListener("click", startPlaying);

function computerDraw() {
  const randomNum = Math.floor(Math.random() * options.length); 
    computerCurrentChoise = options[randomNum];
    console.log(computerCurrentChoise);
    shakeHands();
  }

function playerDraw(e) {

  playerCurrentChoise = e.target.className;
  console.log(e.target.className);
  computerDraw();
  shakeHands();
  whoWins();
}

  let btnOptions = document.querySelectorAll(".options > button");
  
  
  for(let i=0; i<btnOptions.length; i++) {
    btnOptions[i].addEventListener("click", playerDraw);
  }
function whoWins() { 
  setTimeout( () => {
    switch(`${playerCurrentChoise}-${computerCurrentChoise}`) {
      case "paper-rock":
      case "rock-scissors":
      case "scissors-paper":
        console.log("player wins!");
        totalPlayerScore++;
        document.querySelector(".player-score p").innerHTML = totalPlayerScore;
        winner.innerHTML = `Player wins!`
        console.log(totalPlayerScore);
        break;
      case "paper-scissors":
      case "rock-paper":
      case "scissors-rock":
        console.log("computer wins!");
        totalComputerScore++;
        document.querySelector(".computer-score p").innerHTML = totalComputerScore;
        winner.innerHTML = `Computer wins!`
        break;
      case "paper-paper":
      case "rock-rock":
      case "scissors-scissors":
        console.log("It's a drawn.");
        winner.innerHTML =`It's a drawn. Let's play one more time!`
    }}, 2500)
}




function shakeHands() {
  playerHand.style.animation = "shakePlayer 2s ease";
  computerHand.style.animation = "shakeComputer 2s ease";
  ///dodac odglos shake
  setTimeout( () => {
    playerHand.src = `./coverage/${playerCurrentChoise}.png`
    computerHand.src = `./coverage/${computerCurrentChoise}.png`
    playerHand.style.animation = "";
    computerHand.style.animation = "";
    //dodac odglos nozyczek, kamienia i papieru
  }, 2000);
  
}


