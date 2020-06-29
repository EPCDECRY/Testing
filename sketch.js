

function func3(){
  var tt3 = document.getElementById("th");
  var opt = document.getElementById("select-option");
  var tt4 = document.getElementById("fo");
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
var tt4 = document.getElementById("fo");
var tt3 = document.getElementById("th");
var opt = document.getElementById("select-option");
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
