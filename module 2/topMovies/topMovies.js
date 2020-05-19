function updateMovies() {
  const movies = document.querySelector('#content ol');
  const lastMovie = movies.lastElementChild;

  movies.removeChild(lastMovie);

  const newMovie = document.createElement('li');
  newMovie.textContent = 'Avengers: Endgame (2019)';

  movies.insertBefore(newMovie, movies.firstElementChild);

  const edition = document.getElementsByTagName('h2')[0];
  edition.textContent = '2019 edition';
}

document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('update');
  button.addEventListener('click', updateMovies);
});
