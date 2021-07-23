import CONFIG from '../../globals/config';

const createMovieDetailTemplate = (movie) => `
<h2 class="movies__title">${movie.title}</h2>
<img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + movie.poster_path}" alt="${movie.title}" />
<div class="movie__detail">
<div class="movie__info">
<h3>Information</h3>
  <h4>Tagline</h4>
  <p>${movie.tagline}</p>
  <h4>Release Date</h4>
  <p><i class="fa fa-calendar" aria-hidden="true"></i> ${movie.release_date}</p>
  <h4>Duration</h4>
  <p><i class="fa fa-clock-o" aria-hidden="true"></i> ${movie.runtime} minutes</p>
  <h4>Rating</h4>
  <p><i class="fa fa-star" aria-hidden="true"></i> ${movie.vote_average}</p>
</div>
<div class="movie__overview">
  <h3>Overview</h3>
  <p>${movie.overview}</p>
</div>
</div>
`;

const createMovieItemTemplate = (movie) => `
<div class="movie-item item">
<div class="movie-item__header">
<a href="${`/#/detail/${movie.id}`}"><img class="movie-item__header__poster" alt="${movie.title || '-'}"
        src="${movie.backdrop_path ? CONFIG.BASE_IMAGE_URL + movie.backdrop_path : 'https://picsum.photos/id/666/800/450?grayscale'}"></a>
    <div class="movie-item__header__rating">
        <p><i class="fa fa-star" aria-hidden="true"></i><span class="movie-item__header__rating__score">${movie.vote_average || '-'}</span></p>
    </div>
</div>
<div class="movie-item__content">
    <h3 class="movie__title"><a href="${`/#/detail/${movie.id}`}">${movie.title || '-'}</a></h3>
    <p>${movie.overview || '-'}</p>
    <p class="rilis">Tanggal Rilis</p>
    <p><i class="fa fa-calendar" aria-hidden="true"><span>${movie.release_date || '-'}<span></i></p>
    </div>
</div>
  `;
const createLikeMovieButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeMovieButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createMovieItemTemplate, createMovieDetailTemplate, createLikeMovieButtonTemplate, createUnlikeMovieButtonTemplate };