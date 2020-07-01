let originalboard;
let player1='O';
let player2='X';
let startplayer = player1;
let wincombi=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [6,4,2]
];

let blocks = document.querySelectorAll('.block');
console.log(blocks);

function clearboard(){
  for(let i=0;i<blocks.length;i++)
  {
    blocks[i].innerText = '';
    originalboard = Array.from(Array(9).keys());
  }

}


function startGame(){
  originalboard = Array.from(Array(9).keys());
  for(let i=0;i<blocks.length;i++)
  {
    blocks[i].innerText = '';
    blocks[i].addEventListener('click',turnclick,false);
  }

}


function turnclick(squarethree){
  console.log(squarethree.target.id);
  turn(squarethree.target.id, startplayer);
  if(startplayer==player1){
    startplayer=player2;
  }else {
    startplayer=player1;
  }
}

function turn(squareID, player){
  originalboard[squareID] = player;
  document.getElementById(squareID).innerText = player;
}
