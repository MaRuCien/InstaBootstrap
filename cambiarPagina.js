
function pop(id_name){
    document.getElementById(id_name).style.display = "block";
}

function hide(id_name){
    document.getElementById(id_name).style.display = "none";
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("NewPost");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}