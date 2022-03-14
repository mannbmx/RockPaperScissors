
//Sets the computer's selection.
function computerPlay(){
    let randomNum = Math.floor(Math.random()*3)+1;
    let compHand;
    switch (randomNum){
        case 1:
            compHand = "Rock";
            break;
        case 2:
            compHand = "Paper";
            break;
        default:
            compHand = "Scissors";
            
    }

    return(compHand)
}


//Sets the users slection
function playerSelection(string){
    //const play1 = prompt("Choose between Rock, Paper, or Scissors.\nBest out of 5 wins.")
    const play1 = string;

    let play2 = play1.charAt(0).toUpperCase()+play1.slice(1).toLowerCase();
    
    return(play2)


}

//Plays a round and delivers the results
function playRound(string){
    let result;
    let resultNum;
    let playHand = playerSelection(string);
    const comHand = computerPlay();
    
    switch(true){
        case(playHand == "Rock" && comHand == "Paper"):
            result = "Computer wins. Paper beats rock!";
            resultNum = 1;
            break;
        case(playHand == "Rock" && comHand == "Scissors"):
            result = "Player wins. Rock beats scissors!";
            resultNum = 2;
            break;
        case(playHand == "Paper" && comHand == "Rock"):
            result = "Player wins. Paper beats rock!";
            resultNum = 2;
            break;
        case(playHand === "Paper" && comHand === "Scissors"):
            result = "Computer wins. Scissors beats paper!";
            resultNum = 1;
            break;
        case(playHand==="Scissors"&&comHand==="Rock"):
            result = "Computer wins. Rock beats scissors!";
            resultNum = 1;
            break;
        case(playHand==="Scissors"&&comHand==="Paper"):
            result = "Player wins. Scissors beats paper!";
            resultNum = 2;
            break;
        default:
            result = "Tie Game!"
            resultNum = 3;
   }

    const gameResults = document.querySelector('#gameResults');
    gameResults.textContent = result;
    //resultsDiv.appendChild(gameResults);
    
   console.log("Computer plays "+comHand);
   console.log("Player plays "+playHand);
    return(resultNum);
}

const resultsDiv = document.querySelector('#results');
let playerWins = 0;
let compWins = 0;
let tieGames = 0;

const winner = document.createElement('h3');

const rock = document.querySelector("#rock");
rock.addEventListener('click', ()=>{
    let rounds = playRound('rock');
    if(rounds === 2){
        ++playerWins;
        playerTotal.textContent = "Player Wins: "+ playerWins;
    }else if(rounds ===1){
        ++compWins;
        compTotal.textContent = "Computer Wins: "+ compWins;
    }else{
        ++tieGames;
    }
    if(playerWins === 5){
        winner.textContent = " Congratulations! You win overall!";
        resultsDiv.appendChild(winner);
    }else if(compWins === 5){
        winner.textContent = "Tough luck! The computer wins overall!";
        resultsDiv.appendChild(winner);
    }else{};
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', ()=>{
    let rounds = playRound("paper");
    if(rounds === 2){
        ++playerWins;
        playerTotal.textContent = "Player Wins: "+ playerWins;
    }else if(rounds ===1){
        ++compWins;
        compTotal.textContent = "Computer Wins: "+ compWins;
    }else{
        ++tieGames;
    }
    if(playerWins === 5){
        winner.textContent = " Congratulations! You win overall!";
        resultsDiv.appendChild(winner);
    }else if(compWins === 5){
        winner.textContent = "Tough luck! The computer wins overall!";
        resultsDiv.appendChild(winner);
        
    }else{};
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', ()=>{
    let rounds = playRound("scissors");
    if(rounds === 2){
        ++playerWins;
        playerTotal.textContent = "Player Wins: "+ playerWins;
    }else if(rounds ===1){
        ++compWins;
        compTotal.textContent = "Computer Wins: "+ compWins;
    }else{
        ++tieGames;
     
    }
    if(playerWins === 5){
        winner.textContent = " Congratulations! You win overall!";
        resultsDiv.appendChild(winner);
    }else if(compWins === 5){
        winner.textContent = "Tough luck! The computer wins overall!";
        resultsDiv.appendChild(winner);
    }else{};
});

const playerTotal = document.querySelector('#playerWins');
playerTotal.textContent = "Player Wins: "+ playerWins;

const compTotal = document.querySelector('#compWins');
compTotal.textContent = "Computer Wins: "+ compWins;


console.log(playerWins);
console.log(compWins)
