const playerText = document.querySelector("#playerText");
const CompText = document.querySelector("#CompText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;
choiceBtns.forEach(button => button.addEventListener("click",()=>{
    player = button.textContent;
    computerFunc();
    playerText.textContent=`Player: ${player}`;
    CompText.textContent=`Computer: ${computer}`
    resultText.textContent=checkWinner();
}));
function computerFunc(){
const randNum = Math.floor(Math.random() * 3)+1;
 switch(randNum){
    case 1:
        computer = "Rock";
        break;
        case 2:
        computer = "Paper";
        break;
        case 3: 
        computer = "Scissors";
        break;
 }
}
function checkWinner(){
    if(computer==player){
        return "Draw!!";

    }
    else if(computer=="Rock"){
        return (player=="Paper") ? "You Win!!": "You Loose"
    }
    else if(computer=="Paper"){
        return (player=="Scissors")?"You Win!!":"You Loose"
    }
    else if(computer=="Scissors"){
        return (player=="Rock")?"You Win!!":"You Loose"
    }
}