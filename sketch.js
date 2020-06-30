function func3(){
  let tt3 = document.getElementById("th");
  let opt = document.getElementById("select-option");
  let tt4 = document.getElementById("fo");
  if (tt3.style.display === "none") {
    opt.style.display = "none";
    tt4.style.display = "none";
    tt3.style.display = "block";
  } else {
      tt3.style.display = "none";
      tt4.style.display = "none";
      opt.style.display = "block";
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
    } else {
      tt4.style.display = "none";
      tt3.style.display = "none";
      opt.style.display = "block";
    }
}

function funcpvp(){
  let p1 = document.getElementById('human');
  let p2 = document.getElementById('robot');
  p1.src = "img/Human1.png";
  p2.src = "img/Human2.png";
  document.getElementById('pvp').style.display = "none";
  document.getElementById('pve').style.display = "block";
}

function funcpve(){
  let p1 = document.getElementById('human');
  let p2 = document.getElementById('robot');
  p1.src = "img/Human1.png";
  p2.src = "img/Robot.png";
  document.getElementById('pvp').style.display = "block";
  document.getElementById('pve').style.display = "none";
}