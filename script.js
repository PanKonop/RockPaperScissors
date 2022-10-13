let userScore = 0;
let compScore = 0;

//wygeneruj odp komputera rock, paper or scissors
function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);
    if (compChoice === 0) {
        return "ROCK";
    } else if (compChoice === 1){
        return "PAPER";
    } else if (compChoice === 2) {
        return "SCISSORS";
    }
}

function getUserChoice() {
    do {
        let userChoice = prompt("What is your choice?").toUpperCase();
        if (userChoice === "ROCK" || userChoice === "SCISSORS" || userChoice === "PAPER") {
        return userChoice;
        } else console.log("Wrong");
        }
    while(1);
}

function compare(comp, user) {
    if (comp === user) {
        console.log("TIE!")
    } else if ((user === "ROCK" && comp === "SCISSORS") ||  (user === "SCISSORS" && comp === "PAPER") || (user === "PAPER" && comp === "ROCK")) {
        userScore++;
        console.log(user + " beats " + comp + ". You won round!");
    } else {
        compScore++;
        console.log(comp + " beats " + user + ". Computer won round");
    }

}

function finalScore() {
    console.log("*************************");
    console.log("End of game");
    console.log("FINAL RESULT!!! User "+ userScore + ":" + compScore + " Comp");
    if (userScore > compScore) {
        console.log("You WON the game!");
    } else if(userScore < compScore) {
        console.log("Computer WON the game!");
    } else {
        console.log("It is a tie game!");
    }
}

for (let i = 0; i < 5; i++) {
    compare(getComputerChoice(),getUserChoice());
    console.log("User "+ userScore + ":" + compScore + " Comp");
}

finalScore();