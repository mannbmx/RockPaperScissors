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

const playerHand = playerSelection()
const compHand = computerPlay()
//console.log(playerHand, compHand)

function playRound(playerHand, compHand){
    let result;
    
    switch(true){
        case(playerHand == "Rock" && compHand == "Paper"):
            result = "Computer wins. Paper beats rock!";
            break;
        case(playerHand == "Rock" && compHand == "Scissors"):
            result = "Player wins. Rock beats scissors!";
            break;
        case(playerHand == "Paper" && compHand == "Rock"):
            result = "Player wins. Paper beats rock!";
            break;
        case(playerHand === "Paper" && compHand === "Scissors"):
            result = "Computer wins. Scissors beats paper!";
            break;
        case(playerHand==="Scissors"&&compHand==="Rock"):
            result = "Computer wins. Rock beats scissors!";
            break;
        case(playerHand==="Scissors"&&compHand==="Paper"):
            result = "Player wins. Scissors beats paper!";
            break;
        default:
            result = "wtf!"
   }

   
    return(result)
}

console.log(playRound())
console.log(compHand)
console.log(playerHand)