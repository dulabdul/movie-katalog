class footerBar extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html */ `
    <style>
    /*
    Footer
  */   
  footer {
    padding: 16px;
  }
  
  footer p {
    text-align: center;
    color: #fff;
  }
  
  footer p a {
    color: #fff;
    text-decoration: none;
  }
  footer i{
      color:#f8503f !important;
      font-size:22px;
  }
           </style>
              <footer>
              <p icon-love>Created By <i class="fa fa-heart" aria-hidden="true"></i><span class="font-italic">Abdulrahman</span></p>
          </footer>
                `;
  }
}
customElements.define('footer-bar', footerBar);
