import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';


export default function render() { 
return html`
<style include="shared-styles">
    :host {
      display: inline-block;
    }

    .container {
      display: block;
      background-color: transparent;
      text-align:center;
      padding:0 30px;

    }
    .circle-icon{
        width:45px;
        height:45px;
        border-radius:50%;
        background-color:white;
        border:3px solid var(--color-aggie-gold);
        transition: 0.1s;
        display: flex;
        align-items: center;
        margin: 0 auto;
    }

    .circle-icon:hover {
        width:50px;
        height:50px;
        border-radius:50%;
        background-clip:content-box;
               
        background-color: var(--color-aggie-gold);
        padding: 5px;
        border:5px dotted var(--color-aggie-gold);
    }
    .icon{
      fill:var(--default-primary-color);
      text-align: center;
      margin: 0 auto;
      display: inline-block;
    }
    .icon.fin {
      width: 25px;
      height: 25px;
    }
     #svg {
       margin: 0 auto;
       display: block;
     }
     #padding{
       padding-top: 10px;
       color: var(--default-primary-color);
       font-weight: bold;
     }

    

</style>

<div class="container">
  <div class="circle-icon ${classMap(this.constructClasses())}" style="${styleMap(this.getCircleSizeStyles())}">
    ${this.renderIcon()}
  </div>
  <div id="padding"><slot name="icon-text"></slot></div>
</div>
`;}
