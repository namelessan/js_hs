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

function main() {
  const title1 = document.createElement('h1');
  title1.textContent = 'Top 5 highest-grossing movies of all time';

  const title2 = document.createElement('h2');
  title2.textContent = '2018 edition';

  document.body.appendChild(title1);
  document.body.appendChild(title2);

  const button = document.createElement('button');
  button.textContent = 'Update';
  button.id = 'update';
  document.body.appendChild(button);
  button.onclick = updateMovies;

  const content = document.createElement('div');
  content.id = 'content';
  content.class = 'regularList';

  const orderList = document.createElement('ol');
  const movies = [
    'Avatar (2009)',
    'Titanic (1997)',
    'Star Wars: The Force Awakens (2015)',
    'Avengers: Infinity War (2018)',
    'Jurassic World (2015)',
  ];
  movies.forEach((text) => {
    const movie = document.createElement('li');
    movie.textContent = text;

    orderList.appendChild(movie);
  });

  content.appendChild(orderList);

  document.body.appendChild(content);
}

document.addEventListener('DOMContentLoaded', main);
