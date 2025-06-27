class Carousell extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
              <div class="carousell">
        <button onclick="shuffle('left')">
          <div class="arrowleft"></div>
        </button>
        <div class="inner-carousell">
          <div class="text">
          <h2>Lucas Cranach</h2>          
          <p>Lucas Cranach der Ältere verkörpert die Idee eines Mannes im Zeitalter der Renaissance, der neben seiner Tätigkeit als Maler, Grafiker und Buchdrucker auch als Politiker und Unternehmer tätig war.</p>
        </div>
        <div class="imgs">
          <img src="assets/images/lucas-cranach-1.jpg">
          <img src="assets/images/lucas-cranach-2.jpg">
          <img src="assets/images/lucas-cranach-3.jpg">
        </div>
        
        </div>
      
        <button onclick="shuffle('right')">
          <div class="arrowright"></div>
        </button>
      </div>
      <div class="pagination"></div>
    `;
  }
}
customElements.define('carousell-comp', Carousell);