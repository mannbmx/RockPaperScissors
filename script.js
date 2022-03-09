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
    const play1 = prompt("Choose between Rock, Paper, or Scissors")
    
    let play2 = play1.charAt(0).toUpperCase()+play1.slice(1).toLowerCase();
    
    return(play2)


}


//Couldn't get function to work withough putting hand vars inside of the function.

function playRound( ){
    let result;
    let playHand = playerSelection()
    const comHand = computerPlay()
    
    switch(true){
        case(playHand == "Rock" && comHand == "Paper"):
            result = "Computer wins. Paper beats rock!";
            break;
        case(playHand == "Rock" && comHand == "Scissors"):
            result = "Player wins. Rock beats scissors!";
            break;
        case(playHand == "Paper" && comHand == "Rock"):
            result = "Player wins. Paper beats rock!";
            break;
        case(playHand === "Paper" && comHand === "Scissors"):
            result = "Computer wins. Scissors beats paper!";
            break;
        case(playHand==="Scissors"&&comHand==="Rock"):
            result = "Computer wins. Rock beats scissors!";
            break;
        case(playHand==="Scissors"&&comHand==="Paper"):
            result = "Player wins. Scissors beats paper!";
            break;
        default:
            result = "Tie Game!"
   }

   console.log("Computer plays "+comHand)
   console.log("Player plays "+playHand)
   console.log(result)
    return(null)
}

function game( ){
    let rounds = playRound();
    console.log(rounds)


}

console.log(game( ))
//console.log(compHand)
//console.log(playerHand)