class CustomElement extends HTMLElement {
  constructor() {
    super();

    this.addEventListener("click", () => {
      this.classList.toggle("custom-element");
    });
  }

  connectedCallback() {
    this.innerHTML += `
        <div class="more-info">
         Here's very important info you should now 
        </div>
      `;

    this.classList.add("hidden");
  }
}

customElements.define("custom-element", CustomElement);
