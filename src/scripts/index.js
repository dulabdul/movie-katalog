//bootstrap
import '../styles/app.scss';
import 'bootstrap';
import 'regenerator-runtime';
//import CRUD
import './crud/main';
import './crud/database';
//akhir crud
//component
import './component/header-bar';
import './component/database-bar';
import './component/footer';
import './component/to-top-bar';
// akhir component
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

const app = new App({
  button: document.querySelector('header-bar').shadowRoot.querySelector('#hamburgerButton'),
  drawer: document.querySelector('header-bar').shadowRoot.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});
