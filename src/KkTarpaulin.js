import { html, css, LitElement } from 'lit-element';

export class KkTarpaulin extends LitElement {
  static get styles() {
    return css`
      :host {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        color: var(--kk-tarpaulin-text-color, #000);
      }

      #container {
        width: 100%;
        flex-grow: 1;
        background-color: #000000;
      }
    `;
  }

  static get properties() {
    return {

    };
  }

  constructor() {
    super();
    this.c = document.createElement('canvas');
  }

  firstUpdated() {
    this.appendCanvas();
  }

  render() {
    return html`
    <div id="container"></div>
    `;
  }

  appendCanvas() {
    const container = this.shadowRoot.getElementById('container');
    this.c.setAttribute('width', container.clientWidth);
    this.c.setAttribute('height', container.clientHeight);
    container.appendChild(this.c);
  }
}
