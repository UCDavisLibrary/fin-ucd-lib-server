import { html } from 'lit-element';

export default function render() { 
return html`
<style include="shared-styles">
  :host {
    display: block;
  }
  .root {
    display: flex;
    align-items: center;
    max-width: 325px;
  }
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    background: white;
    border: none;
    height: 45px;
    outline: none;
    font-size: var(--font-size);

  }
  button {
    background: var(--color-aggie-gold);
    height: 45px;
    border: none;
    margin: 0;
    padding: 0 10px;
    border-radius: 0;
    cursor: pointer;
  }


</style>
<div class="root">
  <div style="flex:1">
    <input 
      id="input" 
      type="text"
      on-keyup="_onKeyUp"
      placeholder="${this.placeholder}" />
  </div>
  <button on-click="_fireSearch">
    <slot name="button-content"></slot>
  </button>
</div>
`;}
