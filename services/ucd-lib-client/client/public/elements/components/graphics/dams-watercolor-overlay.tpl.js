import { html } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import "@polymer/iron-icons/iron-icons";
import './dams-watercolor';


export default function render() { 
return html`

<style>
  :host {
    display: inline-block;
    position: relative;
  }
  .img-container {
    border-radius: 50%;
    background-size: cover;
    position: absolute;
  }
  iron-icon {
    position: absolute;
  }
</style>
<dams-watercolor
  rotate="${this.wcRotation}"
  color="${this.wcColor}"
  src-file-prefix="${this.wcPattern}">
</dams-watercolor>
${this.imgSrc ? html`
  <div class="img-container" style="${styleMap(this.getImgStyles())}"></div>
` : html``}
${this.icon ? html`
  <iron-icon icon="${this.icon}" style="${styleMap(this.getIconStyles())}"></iron-icon>
` : html``}


`;}