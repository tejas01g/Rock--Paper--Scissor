let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompchoice = () => {
    const options =["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() *3);
    return options[randIdx];
};

const drawGame=() =>{
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor="#081b31"
}

const showWinner =(userwin) =>{
    if(userwin){
        console.log("You Win!");
       msg.innerText= "You Win!";
       msg.style.backgroundColor="green"
    }else{
        console.log("You Lost");
        msg.innerText = "You Lost";
        msg.style.backgroundColor="red"
    }
};

const playgame =(userchoice) => {
    console.log("user choice =" , userchoice);   
// generate compute choice
    const compChoice = genCompchoice();
    console.log("comp choice =", compChoice);

    if(userchoice == compChoice) {
        drawGame();
    }else{
        let userwin = true;
        if(userchoice == "rock"){
            // scissor , paper
           userwin = compChoice == "paper"? false :  true;
        }else if(userchoice == "paper"){
            // Rock, scissor
            userwin = compChoice == "scissor"? false : true;
        }else{
            //rock,paper
          userwin = compChoice=="rock"? false : true;
        }
        showWinner(userwin);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked", userchoice);
        playgame(userChoice)
    });
});