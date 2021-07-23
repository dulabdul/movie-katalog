class headerBar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({
      mode: 'open',
    });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /* html */ `
          <style>
              
/*
  AppBar
*/

.app-bar {
  padding: 8px 16px;
  background-color: #242526;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.app-bar .app-bar__menu {
  display: flex;
  align-items: center;
}

.app-bar .app-bar__menu button {
  background-color: transparent;
  color: #fff;
  min-width: 44px;
  min-height: 44px;
  border: none;
  font-size: 18px;
  padding: 8px;
  cursor: pointer;
}

.app-bar .app-bar__brand {
  display: flex;
  align-items: center;
}

.app-bar .app-bar__brand h1 {
  color: #e4e6eb;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 22px;
  user-select: none;
  transition:all 0.2s ease-in-out;
}
.app-bar .app-bar__brand h1:hover {
  border-bottom:3px solid #fff;
}

.app-bar .app-bar__navigation {
  position: absolute;
  top: 50px;
  left: -630px;
  width: 600px;
  transition: all 0.3s;
  padding: 8px;
  background-color: #242526;
  overflow: hidden;
}

.app-bar .app-bar__navigation.open {
  left: 0;
}

.app-bar .app-bar__navigation ul li a {
  display: inline-block;
  text-decoration: none;
  color: #e4e6eb;
  padding: 8px;
  margin-bottom: 5px;
  width: 100%;
  transition:all 0.2s ease-in-out;
}
.app-bar .app-bar__navigation a.active {
  border-bottom:3px solid #fff;
}
.app-bar .app-bar__navigation ul li a:hover {
  color: #fff;
  border-bottom:3px solid #fff;
}
@media screen and (max-width: 928px) and (min-width: 600px) {
  .movies {
    grid-template-columns: 45%;
    grid-auto-columns: 45%;
  }
}
@media screen and (min-width: 600px) {
  .app-bar .app-bar__brand h1 {
    font-size: 1.5em;
  }

  .app-bar .app-bar__menu {
    display: none;
  }

  .app-bar .app-bar__navigation {
    position: static;
    width: 100%;
  }

  .app-bar .app-bar__navigation ul li {
    display: inline-block;
  }

  .app-bar .app-bar__navigation ul li a {
    display: inline-block;
    width: 120px;
    text-align: center;
    margin: 0;
  }
}

@media screen and (min-width: 768px) {
  .app-bar .app-bar__brand h1 {
    font-size: 2em;
  }
  .app-bar {
    grid-template-columns: 1fr auto;
    padding: 8px 32px;
  }

}

       </style>
      <header class="app-bar">
      <div class="app-bar__menu">
          <button id="hamburgerButton">☰</button>
      </div>
      <div class="app-bar__brand">
          <h1>Movie Catalogue</h1>
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
          <ul>
              <li><a href="#/home" class="active"><i class="fa fa-home" aria-hidden="true"></i>Home</a></li>
              <li><a href="#/like">Liked Movies</a></li>
              <li><a href="#/about">About</a></li>
          </ul>
      </nav>
  </header>
            `;
  }
}

customElements.define('header-bar', headerBar);
