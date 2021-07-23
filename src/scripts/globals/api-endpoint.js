import CONFIG from './config';

const API_ENDPOINT = {
  NOW_PLAYING: `${CONFIG.BASE_URL}movie/now_playing?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=2`,
  UPCOMING: `${CONFIG.BASE_URL}movie/upcoming?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  POPULAR: `${CONFIG.BASE_URL}movie/popular?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  TOP_RATED: `${CONFIG.BASE_URL}movie/top_rated?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}&page=1`,
  SEARCH: `${CONFIG.BASE_URL}search/movie?api_key=${CONFIG.KEY}&language=${CONFIG.DEFAULT_LANGUAGE}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}movie/${id}?api_key=${CONFIG.KEY}`,
};

export default API_ENDPOINT;
