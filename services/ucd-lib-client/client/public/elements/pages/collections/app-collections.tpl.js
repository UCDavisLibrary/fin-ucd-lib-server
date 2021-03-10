import { html } from 'lit-element';
import sharedStylesCss from "../../styles/shared-styles";
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() { 
return html`
<style>
  :host {
    display: block;
    position: relative;
    background-color: var(--super-light-background-color);
  }

  .text-container {
    margin: 0;
    padding: 2rem 5rem 2rem 5rem ;
  }

  h1, h2 {
    color: var(--default-primary-color);
  }

  h2 {
    margin: 15px 0 0 0px;
  }

  .yellow-line {
    margin: 0 auto 0 0;
    text-align: left;
    width: 50px;
    height: 4px;

    border-color: var(--default-secondary-color);
    background-color: var(--default-secondary-color);
  }
  
  .rasterImage{
    height:100px;
    max-width: 20%;    
    background-color: var(--color-aggie-blue-50);
    margin: 0 auto;
    text-align:center;
  }
  .headerText {
    text-align: center;
    margin: 1rem 0;
    font-size: 2.94rem;
    color: var(--color-aggie-blue);
  }
  fieldset {
    text-align:center;
  }
  .radioMenu {
    text-align:center;
  }

  ${sharedStylesCss}


</style>

<div class="text-container">  
  <div class="rasterImage"></div>
  <div class="headerText"> Browse <b>Collections</b></div>
  
  <app-radio-button choices='[{"text": "Title"},
                              {"text": "Recent"},
                              {"text": "Item Quantity"}]'></app-radio-button>
</div>
`;}