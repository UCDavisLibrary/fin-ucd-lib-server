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
      height: 1.5rem;
      border-radius: 2rem;
      padding: 20px 30px 20px 20px;
      display:flex;
      background-color: var(--color-aggie-blue-40);
      color: var(--default-primary-color);


    }
    .icon-container {

      background-color:transparent;
      display: inline-block;
      transition: 0.3s;



    }
    .container:hover {
      background-color: var(--default-primary-color);
      color: white;
    }

    .container:hover iron-icon{
      fill:white;
    }
    
    iron-icon {
      fill: var(--default-primary-color);
      width: 30px;
      height: 30px;
    }


  </style>

  <div class="container">
    <div class="icon-container">
      <iron-icon icon="icons:archive"></iron-icon> <!--  Change to svg later -->
    </div>
    <span style="padding-left:10px">
      <slot name="round-button-text"></slot>
    </span>
  </div>
  `;
}
