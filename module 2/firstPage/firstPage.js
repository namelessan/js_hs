const title = document.getElementsByTagName('title');
title[0].textContent = 'My first (dynamic) webpage';

const poemTitles = document.getElementsByTagName('h2');
const then = poemTitles[0];
const now = poemTitles[1];

// then.addEventListener('click', function() {
//   alert('Sir Edmund Spenser (1590)');
// });

// now.addEventListener('click', function() {
//   alert('Folk Song (unknown)');
// });

then.onClick(function() {
  console.log('l===k me mayufbkjanks');
});
