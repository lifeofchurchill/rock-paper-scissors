function playGame () {

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 50);

    if (randomNumber < 20) {
        return "rock";
    } else if (randomNumber < 35) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let input = prompt("Enter a number between 1 and 50 to compete with the computer:");
    input = Number(input);

    if (input >= 1 && input <= 20) {
        return "rock";
    } else if (input <= 35) {
        return "paper";
    } else if (input <= 50) {
        return "scissors";
    } else {
        return "invalid";
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "invalid") {
        console.log("Invalid input. Please enter a number between 1 and 50.");
        return;
    }

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win this round!`);
    } else {
        computerScore++;
        console.log(`You lose this round!`);
    }

    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}



for (let i = 1; i <= 5; i++) {
console.log(`Round${i}`);
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

}

if (humanScore > computerScore) {
    console.log('You win the game')
} else if (computerScore > humanScore) {
    console.log('Computer wins the game'); 
}else {
        console.log('This set was a tie')
    }

}


playGame();
