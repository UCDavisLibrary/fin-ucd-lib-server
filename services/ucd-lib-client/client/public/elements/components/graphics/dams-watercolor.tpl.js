import { html } from 'lit-element';

export default function render() { 
return html`

<style>
  :host {
    display: block;
  }
</style> 
<p>Hello World</p>
<img src="${this.getImageSrc()}" alt="">

`;}