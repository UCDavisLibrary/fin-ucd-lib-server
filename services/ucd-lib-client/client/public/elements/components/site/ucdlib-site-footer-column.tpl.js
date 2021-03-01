import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }
</style> 
<h2>${this.header}</h2>
<slot></slot>
`;}