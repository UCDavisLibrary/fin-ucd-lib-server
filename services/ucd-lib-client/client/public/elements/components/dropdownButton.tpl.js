import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
    }
    .container {
      font-size: 1rem;
      background-color: red;
      align-items: center;
      width: auto;
      padding: 15px 0 15px 20px;
      display:flex;
      background-color: var(--color-aggie-blue-50);
      font-weight: bold;
      color: var(--default-primary-color);


    }
    .icon-container {

      background-color:transparent;
      display: inline-block;
      transition: 0.3s;
      padding-left:10px; 
      padding-right:10px;

    }
    
    iron-icon {
      fill: var(--default-primary-color);
      width: 23px;
      height: 23px;
    }


  </style>

  <div class="container">

    <span>
      <slot name="dropdown-button-text"></slot>
    </span>
    <div class="icon-container">
      <iron-icon icon="icons:arrow-drop-down"></iron-icon>
    </div>
  </div>
  `;
}
