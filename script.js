let userScore = 0;
let CompScore  = 0;

const choices1 = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const CompScorepara = document.querySelector("#comp-score")


const genCompChoice = () =>{
    // rock,paper,scissors
    const options = ["rock","paper","scisscor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin,userchoice,CompChoice) =>{
    if(userWin){
        userScore++;
        userScorepara.innerText  = userScore;
        console.log("You Won!");
        msg.innerText = `You Won!${userchoice} Beats ${CompChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You Lose!");
        CompScore++;
        CompScorepara.innerText  = CompScore;
        msg.innerText = `You Lose!${CompChoice} Beats ${userchoice}`;
        msg.style.backgroundColor = "red"
    }
}
const drawGame = () =>{
    console.log("Game is Draw!")
    msg.innerText = `Game Was Draw!`;
    msg.style.backgroundColor = "grey";
}
const playGame = (userchoice) =>{
    console.log("user's choice= ",userchoice);
    // generate computer choice
    const CompChoice = genCompChoice();
    console.log("Computer's Choice= ",CompChoice);

    // fight
    if(userchoice === CompChoice){
        // Drawgame
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice ==="rock"){
            // scissors,paper
            userWin = CompChoice === "paper" ? false : true;
        }
        else if(userchoice ==="paper"){
            // rock,scissors
            userWin = CompChoice  === "scissors" ? false : true;
        }
        else {
            // rock,paper
            userWin = CompChoice === "rock" ? false : true;

        }
        showWinner(userWin,userchoice,CompChoice);
    }
}

choices1.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playGame(userchoice);
    });
});
    
