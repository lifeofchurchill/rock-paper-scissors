///selects the div with id 'results' in the html page
const div = document.querySelector('#results');

/// sets the score for the human and computer to 0 and also sets the game over to false so the game can continue 
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

///function which creates a p element in the results div to enable us display strings on the webpage
function displayResult(text) {
  const p = document.createElement('p');
  p.textContent = text;
  div.appendChild(p);
}

///gets computer to randomly select from the 3 choices given
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

///condition on what both the user and the computer selects and shows what needs to be displayed after one set of game 
function playRound(humanChoice, computerChoice) {
  if (gameOver) return;

  displayResult(`You chose: ${humanChoice}`);
  displayResult(`Computer chose: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    displayResult("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    /// the +++ adds one to who ever wins a round of the game 
    humanScore++;
    displayResult("You win this round!");
  } else {
    computerScore++;
    displayResult("You lose this round!");
  }

  displayResult(`Score — You: ${humanScore}, Computer: ${computerScore}`);

  /// shows the game needs to end after one person hits the 5 mark.
  if (humanScore === 5 || computerScore === 5) {
    gameOver = true;

    if (humanScore === 5) {
      displayResult("🎉 Congratulations, you won the game!");
    } else {
      displayResult("😞 The computer defeated you. Better luck next time!");
    }

    displayResetButton();
  }
}

///creates a button and which says to restart the game after the first one ends 
function displayResetButton() {
  const button = document.createElement("button");
  button.textContent = 'Reset Game';
  button.addEventListener('click', resetGame);
  div.appendChild(button);
}

/// function for resetting the game resets everything to xero
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
///clears old receipts of old games and starts a clean slate 
  div.innerHTML = `
    <button id="rock">Rock</button>
    <button id="paper">Paper</button>
    <button id="scissors">Scissors</button>
  `;

  ///attachs the event listeners to the new button since we cleared the old ones 
  attachEventListeners();
}

function attachEventListeners() {
  document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
  document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
  document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));
}

// Initial setup
attachEventListeners();

