class MainHeaderCn extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      Deno
    `;
  }
}
customElements.define('main-header-cn', MainHeaderCn);