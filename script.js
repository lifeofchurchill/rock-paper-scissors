
function getComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 50)

    if (randomNumber < 20) {
        return "rock";
    } else if (randomNumber < 35) {
    return "paper";
    } else {
    return "scissors";
    }
}
    console.log(getComputerChoice())

function getHumanChoice () {
    let input = prompt("Enter a number between 1 and 50 compete with computer")
    input = Number(input)

    if (input <= 20) {
        return "rock";
    } else if (input <= 35) {
        return "paper";
    }
    else if (input <= 50) {
        return "Scissors"
    }
    else {
        return "Invalid input. please enter a number between 1 and 50"
    }
}
   console.log(getHumanChoice())