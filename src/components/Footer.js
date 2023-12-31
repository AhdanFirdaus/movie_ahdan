class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer">
      <h2>Created with ❤️ Muhammad Ahdan Firdaus</h2>
    </div>`;
  }
}

customElements.define("foo-ter", Footer);
