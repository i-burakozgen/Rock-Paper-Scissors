// todo list 
// create a function named get_computer_Choice so computer randomly chooses rock, paper or scissor hint(math random method can be useful)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  let computer = getRandomInt(3)
function getComputerChoice(computer){
    if (computer == 0){
        return "rock";
    }
    else if(computer == 1){
        return "paper";
    }
    else if(computer == 2){
        return "scissors";
    }
   
}
// get human choice 
function getHumanChoice(){
    while (true) {
        let human = prompt("Your choice (rock, paper, or scissors): ");
        human = human.toLowerCase();
        if (["rock", "paper", "scissors"].includes(human)) {
            return human;
        } else {
            console.log("Invalid choice. Please enter rock, paper, or scissors.");
        }
    }

}

// declare score

var humanScore = 0;
var computerScore = 0;
function playThrough(){
    const humanSelection = getHumanChoice();
    console.log("your choice", humanSelection);
    const computerSelection = getComputerChoice(computer);
    console.log("computer choice", computerSelection);


    if(computerSelection == humanSelection){
        humanScore++;
        computerScore++;
    }
    else if(computerSelection == "rock" && humanSelection == "paper"){
        console.log("player win the round");
        humanScore++;
    }
    else if(computerSelection == "rock" && humanSelection == "scissors"){
        console.log("computer win the round");
        computerScore++;
    }
    else if(computerSelection == "paper" && humanSelection == "rock"){
        console.log("computer win the round");
        computerScore++;
    }
    else if(computerSelection == "paper" && humanSelection == "scissors"){
        console.log("player win the round");
        humanScore++;
    }
    else if(computerSelection == "scissors" && humanSelection =="rock"){
        console.log("player win the round");
        humanScore++;
    }
    else if(computerSelection == "scissors" && humanSelection == "paper"){
        console.log("computer win the round");
        computerScore++;
    } 
}

// write a logic so can play one round
// write logic so they can five round x

function Rounds(numRounds){
    var round = 0;
    for(let i = 0; i < numRounds; i++){
        playThrough();
        round ++;
        console.log("round:", round, "player score: ", humanScore, "computer score: ",computerScore);
    }
}
const numRounds = parseInt(prompt("how many rounds you want to play?"));
Rounds(numRounds);
if (humanScore > computerScore){
    console.log("you win!")
}
else {
    console.log("you lose!",)
}
