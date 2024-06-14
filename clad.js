window.onload = init;
function init(){ 
  var map = document.getElementById ("map");
  map.onmousemove = showCoords
}
function showCoords (eventobj){
let map = document.getElementById("coords");
let x = eventobj.clientX;
let y = eventobj.clientY;
map.innerHTML = "Map coordinates: " + x + " ," + y
}