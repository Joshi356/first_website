let userScore = 0;
let compScore = 0;

const div = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Declare compScorePara outside the event listener
const compScorePara = document.querySelector("#compScore");

document.addEventListener("DOMContentLoaded", () => {
    const userScorePara = document.querySelector("#userScore");

    const genCompChoice = () => {
        const options = ["rock", "paper", "scissor"];
        const randIdx = Math.floor(Math.random() * 3);
        return options[randIdx];
    };

    const drawGame = () => {
        msg.innerText = "Game was a draw. Play again.";
        msg.style.backgroundColor = "#081b31";
    };

    const showwinner = (userwin, userchoice, CompChoice) => {
        if (userwin) {
            userScore++;
            userScorePara.innerText = userScore; // Update user score
            msg.innerText = `You win! Your ${userchoice} beats ${CompChoice}`;
            msg.style.backgroundColor = "green";
        } else {
            compScore++;
            compScorePara.innerText = compScore; // Update computer score
            msg.innerText = `You lost! Your ${CompChoice} beats ${userchoice}`;
            msg.style.backgroundColor = "red";
        }
    };

    const playGame = (userchoice) => {
        const CompChoice = genCompChoice();
        if (userchoice === CompChoice) {
            drawGame();
        } else {
            let userwin = true;
            if (userchoice === "rock") {
                userwin = CompChoice === "paper" ? false : true;
            } else if (userchoice === "paper") {
                userwin = CompChoice === "scissor" ? false : true;
            } else {
                userwin = CompChoice === "rock" ? false : true;
            }

            showwinner(userwin, userchoice, CompChoice);
        }
    };

    div.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userchoice = choice.getAttribute("id");
            playGame(userchoice);
            console.log("Choices were clicked");
        });
    });
});

