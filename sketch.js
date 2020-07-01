let header = document.getElementById("H1");

let colors = ['#dfb642','#b182e1'];
let currentIndex = 0;
setInterval(function () {
   header.style.color = colors[currentIndex];

   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
}, 500);


document.getElementById("threexthree").addEventListener("click", func3);
document.getElementById("fourxfour").addEventListener("click", func4);

let variableb = 0;
let opt = 0;

function func3(){
  let tt3 = document.getElementById("th");
  let opt = document.getElementById("select-option");
  let tt4 = document.getElementById("fo");
  if (tt3.style.display === "none") {
    opt.style.display = "none";
    tt4.style.display = "none";
    tt3.style.display = "block";
    document.getElementById('pvp').style.display = "none";
    document.getElementById('pve').style.display = "block";
    variableb=3;
  } else {
      tt3.style.display = "none";
      tt4.style.display = "none";
      opt.style.display = "block";
      document.getElementById('pvp').style.display = "none";
      document.getElementById('pve').style.display = "block";
      variableb=0;
    }
}




//
function func4(){
  let tt4 = document.getElementById("fo");
  let tt3 = document.getElementById("th");
  let opt = document.getElementById("select-option");
  if (tt4.style.display === "none") {
    tt4.style.display = "block";
    tt3.style.display = "none";
    opt.style.display = "none";
    document.getElementById('pvp').style.display = "none";
    document.getElementById('pve').style.display = "block";

    } else {
      tt4.style.display = "none";
      tt3.style.display = "none";
      opt.style.display = "block";
      document.getElementById('pvp').style.display = "none";
      document.getElementById('pve').style.display = "block";
      clearboard();
    }
}

function funcpvp(){
  let p1 = document.getElementById('human');
  let p2 = document.getElementById('robot');
  p1.src = "img/Human1.png";
  p2.src = "img/Human2.png";
  document.getElementById('pvp').style.display = "none";
  document.getElementById('pve').style.display = "block";
  opt=1;
  if(variableb==3 && opt==1){
    clearboard();
    startGame();
  }
}

function funcpve(){
  let p1 = document.getElementById('human');
  let p2 = document.getElementById('robot');
  p1.src = "img/Human1.png";
  p2.src = "img/Robot.png";
  document.getElementById('pvp').style.display = "block";
  document.getElementById('pve').style.display = "none";
  opt=2;
  if(variableb==3 && opt==2){
    clearboard();
  }
}


  console.log(variableb);
