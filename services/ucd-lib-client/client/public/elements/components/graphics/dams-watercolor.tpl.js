import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() { 
return html`

<style>
  :host {
    display: inline-block;
  }
  img {
    object-fit: contain;
  }
</style> 
<img 
  src="${this.getImgSrc()}" 
  srcset="${this.getImgSrcSet()}"
  height="${this.height}"
  width="${this.width}"
  alt="" 
  style="${styleMap(this.getImgStyles())}">

`;}