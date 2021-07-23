const { default: addMovie } = require('./database');

document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('inputMovie');

  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addMovie();
  });
});
