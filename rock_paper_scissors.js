let playerScore = 0
let compScore = 0

const choices = ['rock', 'paper', 'scissors'] //random choices for computerSelection.
    
function playRound(playerSelection, computerSelection) { //function playRound with two parameters, playerSelection and computerSelection. It's the code that runs the game.

if (playerSelection === computerSelection) {
console.log("It's a Tie!")

}
else if (playerSelection === "rock" && computerSelection === "scissors") {
playerScore++
console.log("You win! rock beats scissors!")
console.log('Player: ' + playerScore + ' Computer: ' + compScore)
}

else if (playerSelection === "rock" && computerSelection === "paper") {
compScore++
console.log("You lose! paper beats rock!")
console.log('Computer: ' + compScore + ' Player: ' + playerScore)

}

else if (playerSelection === "paper" && computerSelection === "scissors") {
compScore++
console.log("You lose! scissors beats paper")
console.log('Computer: ' + compScore + ' Player: ' + playerScore)
}

else if (playerSelection === "paper" && computerSelection === "rock") {
playerScore++
console.log("You win! paper beats rock!")
console.log('Player: ' + playerScore + ' Computer: ' + compScore)
}

else if (playerSelection === "scissors" && computerSelection === "rock") {
compScore++
console.log("You lose! rock beats scissors")
console.log('Computer: ' + compScore + ' Player: ' + playerScore)

}

else if (playerSelection === "scissors" && computerSelection === "paper") {
playerScore++
console.log("You win! paper beats scissors")
console.log('Player: ' + playerScore + ' Computer: ' + compScore)

}
else {
console.log('Enter Rock, Paper or Scissors!')
    }
}




function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt ("Pick rock, paper, or scissors").toLowerCase()
        const computerSelection = getComputerChoice();
        console.log('1 ',playRound(playerSelection, computerSelection))
    }
    if (playerScore > compScore) {
    return 'You have beaten the computer!'
    } else if (compScore > playerScore) {
        return 'You lost! the computer have beaten you!'
    } else {
        return "It's a Draw!"
    }
}


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}


console.log(game())

