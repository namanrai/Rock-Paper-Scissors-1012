function startClick() {
  var modal = document.getElementById("modal");  
  modal.style.display = "block";
}
function closeModal() {
  var modal = document.getElementById("modal");  
  modal.style.display = "none";
}

window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none";
  }
}