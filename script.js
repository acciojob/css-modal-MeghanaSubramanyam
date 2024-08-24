//your JS code here. If required.
var modal=document.querySelector('.modal');
var btn=document.getElementById("openModal");
var span=document.querySelector(".close-modal");
btn.onclick=function(){
	modal.style.dispay="block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}