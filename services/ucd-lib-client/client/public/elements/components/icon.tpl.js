import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';


export default function render() { 
return html`
<style include="shared-styles">
    :host {
      display: inline-block;
    }

    .icon.extralgSVGIcon {
      fill: var(--default-primary-color);;
      width: 40px;
      height: 40px;
    }
    .icon.extralg {
      fill: var(--default-primary-color);;
      width: 40px;
      height: 40px;
    }
    .icon.lg {
      fill: var(--default-primary-color);;
      width: 24px;
      height: 24px;
    }
    .lgIcon {
      height: 24px;
      width: 24px;
    }
    .container {
      display: inline-block;
      width: 75px;
      background-color: transparent;
      margin: auto;
      text-align:center;
      padding:auto;
    }
    .circle-icon{
        width:45px;
        height:45px;
        border-radius:50%;
        background-color:var(--super-light-background-color);
        margin:0 auto;
        border:3px solid var(--color-aggie-gold);
        transition: 0.1s;
        display:table;
    }

    .circle-icon:hover {
        width:50px;
        height:50px;
        border-radius:50%;
        background-clip:content-box;
        margin:0 auto;

        background-color: var(--color-aggie-gold);
        padding: 5px;
        border:5px dotted var(--color-aggie-gold);
    }
    .icon{
      fill:var(--default-primary-color);
      vertical-align:middle;
      text-align: center;
      display:table-cell;
      height: 24px;
      width: 24px;

    }
    .icon.fin {
      width: 25px;
      height: 25px;
    }
    

</style>

<div class="container">
  <div class="circle-icon ${classMap(this.constructClasses())}" style="${styleMap(this.getCircleSizeStyles())}">
    ${this.renderIcon()}
  </div>
  <div><slot name="icon-text"></slot></div>
</div>
`;}
