document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
      //JS won't run until content is fully loaded
var paletteBox = document.getElementsByClassName('palette')[0]
//assigns value of palletBox to the first index of the 'palette' div
var canvas = document.getElementsByClassName('canvas')[0]
// assigns value of canvas to the first index of each 'canvas div' which is the color selector
var color = null;

paletteBox.addEventListener('click', function(event){
color = event.target.classList[0];
//adds event listener to the paletteBox, this will make the current color the first index of whatever classlist was clicked on
})
canvas.addEventListener('click', function(event){
  event.target.classList.add(color)
  //adds event listner to the canvas, which adds the current color to the pixel box when a click is heard
});


  });
