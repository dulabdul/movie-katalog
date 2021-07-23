class databaseBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
      <style>
             </style>
     <div class="content">

     <section class="input_section">
         <h2>Masukkan Film Kamu</h2>
         <form id="inputMovie">
             <div class="form-group">
                 <label for="inputMovieTitle">Judul</label>
                 <input type="text" class="form-control" id="inputMovieTitle" aria-describedby="inputMovieTitle">
             </div>
             <div class="form-group">
                 <label for="inputMovieYear">Tahun Rilis</label>
                 <input type="text" class="form-control" id="inputMovieYear" aria-describedby="inputMovieTitle">
             </div>
             <button type="submit" id="movieSubmit" class="btn-submit btn btn-danger">Masukkan Film Kamu Ke List
                 Film</button>
         </form>
     </section>
     <section class="movie__self">
         <h2>Daftar List Film Kamu</h2>
         <div class="movies" id="listFilm">

         </div>
     </section>
     <section class="movie__self">
         <h2>Selesai Di Tonton</h2>
         <div class="movies" id="completedMovie">
         </div>
     </section>
 </div>
                  `;
  }
}
customElements.define('database-bar', databaseBar);
