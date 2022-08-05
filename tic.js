const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
let audioTrun = new Audio("PUNCH.mp3");
let options=["", "", "", "", "", "", "", "", ""];
let currentPlayer="X";
let running=false; // we will set this to true when we initialize the game; 

initializeGame();

function initializeGame(){
cells.forEach(cell => cell.addEventListener("click", cellClicked));
restartBtn.addEventListener("click",restertGame);
statusText.textContent = `${currentPlayer}'s Turn`; 
running=true;
}
function cellClicked(){
 const cellIndex = this.getAttribute("cellIndex");
 if(options[cellIndex]!= "" || !running){
  return;
 }
 updateCell(this, cellIndex);
 checkWinner();
}
function updateCell(cell, index){
options[index] = currentPlayer;
cell.textContent=currentPlayer;
audioTrun.play();
}
function changePlayer(){
currentPlayer = (currentPlayer == "X") ? "O" : "X";
statusText.textContent=`${currentPlayer}'s Turn`;
}

function checkWinner(){
let roundWon =false;
  for(let i=0; i<winConditions.length; i++){
    const condition = winConditions[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];
    if(cellA=="" || cellB =="" ||cellC =="" ){
        continue;
    }
    if(cellA==cellB && cellB==cellC){
        roundWon = true;
        break;
    }
 }  
 if(roundWon){
    statusText.textContent = ` CONGRATULATONS ${currentPlayer} Wins!!!`;
    running = false;
 }
 else if(!options.includes("")){
    statusText.textContent=`DRAW!!!`;
    running = false;
 }

 else{
    changePlayer();
 } 
}
function restertGame(){
    currentPlayer="X";
    options=["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s Turn`; 
    cells.forEach(cell => cell.textContent = "");
    running = true;
}