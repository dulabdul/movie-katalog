const CONFIG = {
  KEY: 'e6f6c3074b97919cacebcf54edf1d8a1',
  BASE_URL: 'https://api.themoviedb.org/3/',
  BASE_IMAGE_URL: 'https://image.tmdb.org/t/p/w500/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: {
    prefix: 'movie-catalog',
    suffix: 'v1',
    precache: 'app-shell',
  },
  DATABASE_NAME: 'movie-catalogue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'movies',
  WEB_SOCKET_SERVER: 'wss://stormy-badlands-06326.herokuapp.com',
};

export default CONFIG;
