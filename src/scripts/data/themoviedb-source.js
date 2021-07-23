import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource {
  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  }
  static async popularMovies() {
    const response = await fetch(API_ENDPOINT.POPULAR);
    const responseJson = await response.json();
    return responseJson.results;
  }
  static async topRatedMovies() {
    const response = await fetch(API_ENDPOINT.TOP_RATED);
    const responseJson = await response.json();
    return responseJson.results;
  }
  static async searchMoviesQuery() {
    const response = await fetch(API_ENDPOINT.SEARCH);
    const responseJson = await response.json();
    return responseJson.results;
  }
  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TheMovieDbSource;
