import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() {
  return html`
  <style>
    :host {
      display: inline-block;
    }

    


  </style>
  <div id="buttonSelector" style="${styleMap(this.getButtonStyles())}">
    ${this.buttonType == 'chevron' ? 
        html`
           <iron-icon id="chevron-icon" style="padding-left: 10px; color:white; visibility: hidden;" icon="icons:chevron-right"></iron-icon>
            
        `: 
        html``}
    
    <span>
      <slot name="button-text"></slot>
    </span>
  </div>
  `;
}
