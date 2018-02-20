document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");

  var paletteBox = document.getElementsByClassName('palette')[0]

  var canvas = document.getElementsByClassName('canvas')[0]

  var color = null;

  paletteBox.addEventListener('click', function(event) {
    color = event.target.classList[0];

  })
  canvas.addEventListener('click', function(event) {
    event.target.classList.add(color)
    
  });


});
