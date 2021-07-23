import { createMovieItemTemplate } from '../../templates/template-creator';

class FavoriteMovieSearchView {
  getTemplate() {
    return `
       <div class="content">
       <div class="search-box">
       <form class="form-inline my-2 my-lg-0">
       <input class="form-control mr-sm-2" id="query" type="search" placeholder="Cari Film Favorite Kamu" aria-label="Search">
       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
     </form>
    </div>
       <h2 class="content__heading">Your Favorite Movie</h2>
           <div id="movies" class="movies">
                      
           </div>
       </div>
   `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }
  showFavoriteMovies(movies = []) {
    let html;
    if (movies.length) {
      html = movies.reduce((carry, movie) => carry.concat(createMovieItemTemplate(movie)), '');
    } else {
      html = this._getEmptyMovieTemplate();
    }

    document.getElementById('movies').innerHTML = html;

    document.getElementById('movies').dispatchEvent(new Event('movies:updated'));
  }

  _getEmptyMovieTemplate() {
    return '<div class="movie-item__not__found">Tidak ada film untuk ditampilkan</div>';
  }
}

export default FavoriteMovieSearchView;
