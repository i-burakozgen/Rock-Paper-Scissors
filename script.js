// todo list 
// create a function named get_computer_Choice so computer randomly chooses rock, paper or scissor hint(math random method can be useful)

 // get computerchoice
function getComputerChoice(){
    const choice = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
   
}


// declare score

var humanScore = 0;
var computerScore = 0;
let rounds = 0;
let maxRound = 5;
function playThrough(humanChoice){
    if (rounds >= maxRound){
        alert("Game over");
        return;
    }
    
    const result = document.querySelector("#results");
    const computerSelection = getComputerChoice();
    let resultMessage;
    resultMessage = `Computer choice: ${computerSelection}. `;


    if(computerSelection == humanChoice){
        resultMessage += ` Player score: ${humanScore}, Computer score: ${computerScore}.`;

    }
    else if (
        (humanChoice === "rock" && computerSelection === "scissors") ||
        (humanChoice === "paper" && computerSelection === "rock") ||
        (humanChoice === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        resultMessage += ` Player score: ${humanScore}, Computer score: ${computerScore}.`;
    } else {
        computerScore++;
        resultMessage += ` Player score: ${humanScore}, Computer score: ${computerScore}.`;
    }
    
    result.textContent = resultMessage;
    rounds++;
    if (rounds >= maxRounds) {
        let finalMessage = `Game Over! Final Score - Player: ${humanScore}, Computer: ${computerScore}. `;
        if (humanScore > computerScore) {
            finalMessage += "You win!";
        } else if (humanScore < computerScore) {
            finalMessage += "Computer wins!";
        } else {
            finalMessage += "It's a tie!";
        }
        alert(finalMessage);
    }

}



// write a logic so can play one round
// write logic so they can five round x

    /*  function Rounds(numRounds){
        var round = 0;
        for(let i = 0; i < numRounds; i++){
            playThrough();
            round ++;
            console.log("round:", round, "player score: ", humanScore, "computer score: ",computerScore); 
        }
} 

const numRounds = parseInt(prompt("how many rounds you want to play?"));
Rounds(numRounds);
*/

const divButton = document.querySelector("#container");
const buttonRock = document.createElement("button");
buttonRock.textContent = "rock";
buttonRock.addEventListener("click",() => playThrough("rock"));


const buttonPaper = document.createElement("button");
buttonPaper.textContent = "paper";
buttonPaper.addEventListener("click",() => playThrough("paper"));
divButton.appendChild(buttonPaper);

const buttonScissors = document.createElement("button");
buttonScissors.textContent = "scissors";
buttonScissors.addEventListener("click",() => playThrough("scissors"));



divButton.appendChild(buttonRock);
divButton.appendChild(buttonPaper);
divButton.appendChild(buttonScissors);

const Final = document.querySelector("#results");
const resultsFinal = document.createElement("p");
Final.appendChild(resultsFinal);








