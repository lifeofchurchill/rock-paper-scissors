console.log('hello world')
function getComputerChoice () {
    const randomNumber = Math.random()

    if (randomNumber < 0.37) {
        return "rock";
    } else if (randomNumber < 0.68) {
    return "paper";
    } else {
    return "scissors";
    }
}