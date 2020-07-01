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

function twoplayers(){
  playtype=2;
  startGame();
}

function AIplayer(){
  playtype=1;
  startGame();
}

function startGame(){
    document.querySelector(".endgame").getElementsByClassName.display = "none";
    origBoard = Array.from(Array(9).keys());
    for(let i=0;i < cells.length;i++){
        cells[i].innerText='';
        cells[i].style.removeProperty('background-color');
        cells[i].addEventListener('click',turnClick,false);
    }
}

function turnClick(square){
  if(playtype==2){
  if(typeof origBoard[square.target.id] == 'number'){
    click(square.target.id,turn);
    checkTIE();
    if(turn == 'X') {
        turn="O"
    }
    else{
        turn="X"
    }
  }
}
  else{
    if(typeof origBoard[square.target.id] == 'number'){
      click(square.target.id,human);
      if(!checkTIE()) click(bestSPOT(),ai);
    }
    console.log("ai");
  }


}

function click(squareID,player){
    origBoard[squareID] = player;
    document.getElementById(squareID).innerText = player;
    document.getElementById(squareID).cursor= "not-allowed";
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
    for( let i=0;i<cells.length;i++ ){
        cells[i].removeEventListener('click',turnClick,false);
    }
}

function emptySquares(){
  return origBoard.filter(s => typeof s=='number');
}

function checkTIE(){
  if(emptySquares().length==0){
    for(let i=0; i<cells.length;i++){
    cells[i].style.backgroundColor = 'blue';
    cells[i].removeEventListener('click',turnClick,false)
  }
}
}
