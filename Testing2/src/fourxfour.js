let origBoard1;
const winCombos4 = [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15],
    [0,4,8,12],
    [1,5,9,13],
    [2,6,10,14],
    [3,7,11,15],
    [0,5,10,15],
    [3,6,9,12]
]
let turn4 = "X"
const block = document.querySelectorAll('.block');
let player14,player24,tie4;
let playtype4;
let blocksPressed4=0;

function updateScore4(){
    if(playtype4 == 2)
      document.getElementById("score4").innerHTML="Player1: "+player14+"    Tie: "+tie4+"  Player2: "+player24;
    else
      document.getElementById("score4").innerHTML="Player1: "+player14+"    Tie: "+tie4+"  Computer: "+player24;
  }

function twoPlayers4x4(){
    playtype4=2;
    turn4="X";
    document.getElementById("pve4x4").style.backgroundColor="aquamarine";
    document.getElementById("pvp4x4").style.backgroundColor="#FF0000";
    player14=0;
    player24=0;
    tie4=0;
    updateScore4();
    startGame4();
}

function aiPlayer4x4(){
    playtype4=1;
    document.getElementById("pvp4x4").style.backgroundColor="aquamarine";
    document.getElementById("pve4x4").style.backgroundColor="#FF0000";
    player14=0;
    player24=0;
    tie4=0;
    updateScore4();
    startGame4();
}

function startGame4(){
    blocksPressed4 = 0;
    turn4="X";
    origBoard1 = Array.from(Array(16).keys());
    for(let i=0;i < block.length;i++){
        block[i].innerText='';
        block[i].style.removeProperty('background-color');
        block[i].addEventListener('click',turnClick4,false);
    }
}

function turnClick4(square){
    console.log(origBoard1);
    if(playtype4==2){
        click4(square.target.id,turn4);
        checkTie4();
        if(turn4 == 'X') {
            turn4="O"
        }
        else{
            turn4="X"
        }
      }
      else{
        click4(square.target.id,human);
        click4(bestSPOT4(),ai);
        checkTie4();
        console.log("ai");
      }
}

function click4(squareID,player){
    blocksPressed4++;
    console.log(player+" pressed "+squareID);
    origBoard1[squareID-9] = player;
    document.getElementById(squareID).innerText = player;
    document.getElementById(squareID).cursor= "not-allowed";
    block[squareID-9].removeEventListener('click',turnClick4,false);
    let gameWon4 = checkEndgame4(origBoard1,player);
    if(gameWon4) gameOver4(gameWon4)
}

function checkEndgame4(board, player){
    let plays4 = board.reduce((a,e,i) => (e == player) ? a.concat(i) : a,[]);
    let gameWon4 = null;
    for(let [index,win] of winCombos4.entries()){
        if(win.every(elem => plays4.indexOf(elem)>-1)){
            gameWon4 = {index:index ,player:player};
            break;
        }
    }
    return gameWon4;
}

function gameOver4(gameWon4){
    console.log("win combo");
    for(let index of winCombos4[gameWon4.index]){
        console.log(index);
        document.getElementById(index+9).style.backgroundColor="red";
    }
    console.log(gameWon4.player+" Won the game");
    for( let i=0;i<block.length;i++ ){
        block[i].removeEventListener('click',turnClick4,false);
    }
    if(gameWon4.player == "X")
        player14++;
    else
        player24++;
    updateScore4();
    blocksPressed4 = -1;
}

function emptySquares4(){
    return origBoard1.filter(s => typeof s=='number');
}
 
function checkTie4(){
    console.log("Tie Check = "+ (blocksPressed4 > 15));

    if((blocksPressed4 > 15)){
      for( let i=9;i<block.length+9;i++ ){
        document.getElementById(i).style.backgroundColor="Green";
      }
      tie4++;
      updateScore4();
    }
    return (blocksPressed4 > 15);
}