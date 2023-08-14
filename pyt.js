var o2 = document.getElementById("o2");


var b3= document.getElementById("b3");

var span = document.getElementsByClassName("close")[0];

b3.onclick = function() {
  o2.style.display = "block";
}

span.onclick = function() {
  o2.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == o2) {
    o2.style.display = "none";
  }
}