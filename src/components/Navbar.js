import "../components/SearchMovie.js";

class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div class="topnav">
      <a href="/">MovieAhdan</a>
      <search-movie style="float:right;"></search-movie> 
    </div>`;
  }
}

customElements.define("nav-bar", Navbar);
