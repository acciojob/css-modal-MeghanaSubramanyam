// Get the modal
var modal = document.querySelector('.modal');

// Get the button that opens the modal
var btn = document.getElementById("openModal");
var closeBtn=document.querySelector(".close-modal");
btn.addEventListener('click', function() {
  modal.style.display = "block";
});
closeBtn.addEventListener('click', function() {
  modal.style.display = "none";
});
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});