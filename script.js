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

console.log(computerPlay())

function playerSelection(){
    const play1 = prompt("Choose between Rock, Paper, or Scissors")
    
    let play2 = play1.charAt(0).toUpperCase()+play1.slice(1).toLowerCase();
    
    if(play2 === "Rock"||"Paper"||"Scissor"){
        return(play2)
    }else{
        return("Did you spell that right?")
    }


}

console.log(playerSelection())