import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieItemTemplate } from '../templates/template-creator';
const Home = {
  async render() {
    return `
    <div class="hero">
    <div class="hero-inner">

    </div>
    <div class="hero-text">

    </div>
</div>
      <div class="content">
        <h2 class="content__heading">Sedang Tayang Di Bioskop</h2>
        <div id="movies" class="movies">

        </div>
        <h2 class="content__heading">Film Yang Akan Datang</h2>
        <div id="movie" class="movies">

        </div>
        <h2 class="content__heading">Film Populer</h2>
        <div id="popular" class="movies">

        </div>
        <h2 class="content__heading">Film Dengan Rating Tertinggi</h2>
        <div id="rated" class="movies">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesUpcoming = await TheMovieDbSource.upcomingMovies();
    const popularMovies = await TheMovieDbSource.popularMovies();
    const topRatedMovies = await TheMovieDbSource.topRatedMovies();
    const moviesContainer = document.querySelector('#movies');
    const moviesContainerUpcoming = document.querySelector('#movie');
    const popularMoviesContainer = document.querySelector('#popular');
    const topRatedMoviesContainer = document.querySelector('#rated');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
    moviesUpcoming.forEach((movie) => {
      moviesContainerUpcoming.innerHTML += createMovieItemTemplate(movie);
    });
    popularMovies.forEach((movie) => {
      popularMoviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
    topRatedMovies.forEach((movie) => {
      topRatedMoviesContainer.innerHTML += createMovieItemTemplate(movie);
    });
  },
};

export default Home;
