let origBoard;
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
]
let turn = "X"
const cells = document.querySelectorAll('.cell');

let playtype;
let human="X";
let ai="O";
let blocksPressed=0;



function twoPlayers3x3(){
  playtype=2;
  turn="X";
  document.getElementById("pve3x3").style.backgroundColor="aquamarine";
  document.getElementById("pvp3x3").style.backgroundColor="#FF0000";

  startGame();
}

function aiPlayer3x3(){
  playtype=1;
  document.getElementById("pvp3x3").style.backgroundColor="aquamarine";
  document.getElementById("pve3x3").style.backgroundColor="#FF0000";

  startGame();
}

function startGame(){
  blocksPressed = 0;
  // document.querySelector(".endgame").getElementsByClassName.display = "none";
  origBoard = Array.from(Array(9).keys());
  for(let i=0;i < cells.length;i++){
      cells[i].innerText='';
      cells[i].style.removeProperty('background-color');
      cells[i].addEventListener('click',turnClick,false);
  }
}

function turnClick(square){
  if(playtype==2){
    click(square.target.id,turn);
    checkTie();
    if(turn == 'X') {
        turn="O"
    }
    else{
        turn="X"
    }
  }
  else{
    click(square.target.id,human);
    checkTie();
    click(bestSPOT(),ai);
    console.log("ai");
  }
}

function click(squareID,player){
    blocksPressed++;
    console.log(player+" pressed "+squareID);
    origBoard[squareID] = player;
    document.getElementById(squareID).innerText = player;
    document.getElementById(squareID).cursor= "not-allowed";
    cells[squareID].removeEventListener('click',turnClick,false);
    let gameWon = checkEndgame(origBoard,player);
    if(gameWon) gameOver(gameWon)
}

function checkEndgame(board, player){
    let plays = board.reduce((a,e,i) => (e == player) ? a.concat(i) : a,[]);
    let gameWon = null;
    for(let [index,win] of winCombos.entries()){
        if(win.every(elem => plays.indexOf(elem)>-1)){
            gameWon = {index:index ,player:player};
            break;
        }
    }
    return gameWon;
}

function gameOver(gameWon){
    for(let index of winCombos[gameWon.index]){
        document.getElementById(index).style.backgroundColor="red";
    }
    console.log(gameWon.player+" Won the game");
    for( let i=0;i<cells.length;i++ ){
        cells[i].removeEventListener('click',turnClick,false);
    }
    blocksPressed = -1;
}

function emptySquares(){
  return origBoard.filter(s => typeof s=='number');
}

function checkTie(){
  console.log("Tie Check = "+ (blocksPressed > 8));
  if((blocksPressed > 8)){
    for( let i=0;i<cells.length;i++ ){
      document.getElementById(i).style.backgroundColor="Green";
    }
  }
  return (blocksPressed > 8);
}
