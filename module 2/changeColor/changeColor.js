const blueDiv = document.getElementById('blue');
const redDiv = document.getElementById('red');
const yellowDiv = document.getElementById('yellow');
const greenDiv = document.getElementById('green');
const blackDiv = document.getElementById('black');
const square = document.getElementById('square');

blueDiv.addEventListener('mouseover', function() {
  square.style.backgroundColor = 'blue';
});
redDiv.addEventListener('mouseover', function() {
  square.style.backgroundColor = 'red';
});
yellowDiv.addEventListener('mouseover', function() {
  square.style.backgroundColor = 'yellow';
});
greenDiv.addEventListener('mouseover', function() {
  square.style.backgroundColor = 'green';
});
blackDiv.addEventListener('mouseover', function() {
  square.style.backgroundColor = 'black';
});
