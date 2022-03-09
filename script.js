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



function playerSelection(){
    const play1 = prompt("Choose between Rock, Paper, or Scissors.\nBest out of 5 wins.")
    
    let play2 = play1.charAt(0).toUpperCase()+play1.slice(1).toLowerCase();
    
    return(play2)


}


//Couldn't get function to work withough putting hand vars inside of the function.

function playRound( ){
    let result;
    let resultNum;
    let playHand = playerSelection()
    const comHand = computerPlay()
    
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

   console.log("Computer plays "+comHand)
   console.log("Player plays "+playHand)
   console.log(result)
    return(resultNum)
}

function game( ){
   
    let playerWins = 0;
    let compWins = 0;
    let tieGames = 0;

   for(i=0; i<5; i++){
    let rounds = playRound();
    //console.log(rounds)

    
    if(rounds === 2){
        ++playerWins;
        //console.log(playerWins);
    }else if(rounds ===1){
        ++compWins;
        
    }else{
        ++tieGames;
    }

    console.log("Player wins: "+playerWins);
    console.log("Computer wins:"+compWins)
    console.log("Tie games: "+tieGames+"\n")

    
   }

if(playerWins > compWins){
    console.log("\nPlayer Wins!!")
}else if(compWins > playerWins){
    console.log("\nComputer Wins!")
}else{
    console.log("\nLooks like a tie!")
}

}

console.log(game())
