const LIST_FILM = 'listFilm';
const COMPLETED_MOVIE = 'completedMovie';
const addMovie = () => {
  const title = document.getElementById('inputMovieTitle').value;
  const year = document.getElementById('inputMovieYear').value;
  const movie = makeMovie(title, year, true);
  const listFilm = document.getElementById(LIST_FILM);
  listFilm.append(movie);
};
const makeMovie = (judul, tahun, isCompleted) => {
  const movieInfo = {
    title: judul,
    year: tahun,
  };
  const movieTitle = document.createElement('h3');
  movieTitle.innerText = movieInfo.title;

  const movieYear = document.createElement('h4');
  movieYear.innerText = movieInfo.year;

  const movieContainer = document.createElement('div');
  movieContainer.classList.add('movie-item');

  movieContainer.append(movieTitle, movieYear);

  const container = document.createElement('div');
  container.classList.add('action');
  movieContainer.append(container);

  if (isCompleted) {
    container.append(finishButton(), deleteButton());
  } else {
    container.append(undoButton(), deleteButton());
  }
  return movieContainer;
};

const addComplete = () => {
  const title = document.getElementById('inputMovieTitle').value;
  const year = document.getElementById('inputMovieYear').value;
  const doneMovie = makeMovie(title, year, true);
  const completedMovie = document.getElementById(COMPLETED_MOVIE);
  completedMovie.append(doneMovie);
};
const removeMovie = (movieElement) => {
  movieElement.remove();
};
const createButton = (classList, buttonText, eventListener) => {
  const button = document.createElement('button');
  button.classList.add(classList);
  button.innerText = buttonText;

  button.addEventListener('click', (event) => {
    eventListener(event);
  });
  return button;
};
const finishButton = () => {
  return createButton('btn-green', 'Selesai Ditonton', (event) => {
    const movie = event.target.parentElement;
    addMovieToCompleted(movie.parentElement);
    removeMovie(movie.parentElement);
  });
};
const deleteButton = () => {
  return createButton('btn-red', 'Hapus Film', (event) => {
    const movie = event.target.parentElement;
    removeMovie(movie.parentElement);
  });
};

const undoButton = () => {
  return createButton('btn-green', 'Belum Selesai Ditonton', (event) => {
    const movie = event.target.parentElement;
    undoMovieCompleted(movie.parentElement);
    removeMovie(movie.parentElement);
  });
};
const addMovieToCompleted = (movieElement) => {
  const moviesCompleted = document.getElementById(COMPLETED_MOVIE);

  const movieTitle = movieElement.querySelector('.movie-item > h3').innerText;
  const movieYear = movieElement.querySelector('.movie-item > h4').innerText;

  const newMovie = makeMovie(movieTitle, movieYear, false);
  moviesCompleted.append(newMovie);
  movieElement.remove();
};
const undoMovieCompleted = (movieElement) => {
  const movieUncompleted = document.getElementById(LIST_FILM);

  const movieTitle = movieElement.querySelector('.movie-item > h3').innerText;
  const movieYear = movieElement.querySelector('.movie-item > h4').innerText;

  const newMovie = makeMovie(movieTitle, movieYear, true);
  movieUncompleted.append(newMovie);
  movieElement.remove();
};
export default addMovie;
