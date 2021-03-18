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
      display: inline-block;
      text-align:center;
      padding:30px 30px;
      margin: auto;
      height:160px;

    }
    .circle-icon{
      width:45px;
      height:45px;
      border-radius:50%;
      background-color:white;
      border:4px solid var(--color-aggie-gold);
      align-items: center;
      position:absolute;
      z-index: 5;
      transform: translate(12%, 12%);
  
    }
    @keyframes dot--animation {
      0% { opacity: 0; }
      10% { opacity: 0; }
      50% { opacity: .5; }
      100% { opacity: 1; }
    }
    @keyframes in {
      from   { transform: rotate(0deg); }
      to { transform: rotate(360deg);}
    }
    @keyframes out {
      from   { transform: rotate(360deg); }
      to { transform: rotate(0deg); }
    }
    #inner-icon:hover ~ .svgOuter{
      display:block;
      animation: out .25s;
      -moz-animation: out .25s;
      -webkit-animation: out .25s;
      -o-animation: out .25s;
      -ms-animation: out .25s;



    }

    #inner-icon:hover {
      background-color: var(--default-secondary-color);;
      fill: white;



    }

    .svgOuter{
      fill:#ffbf00;
      display:none;
      position: absolute;
      animation: in .25s;
      -moz-animation: in .25s;
      -webkit-animation: in .25s;
      -o-animation: in .25s;
      -ms-animation: in .25s;
      animation-fill-mode: forwards;


      /* transition: .25s;
      animation: .25s ease-out 1 both rotate--in--animation; */

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

     #padding{
       margin: 0 auto;
       color: var(--default-primary-color);
       font-weight: bold;
       text-align:center;
     }
     .space {
       display:none;
     }
     .parent:hover {
       margin-bottom:10px;
       transition:.25s;
     }


    

</style>

<div class="container" style="${styleMap(this.getParentSizeStyles())}">
  <div class="parent ${classMap(this.constructClasses())}" style="${styleMap(this.getParentSizeStyles())}">
    <div id="inner-icon" class="circle-icon ${classMap(this.constructClasses())}" style="${styleMap(this.getCircleSizeStyles())}">
        ${this.renderIcon()}
    </div> 
     ${this.size == 'extralg' ? 
        html `
          <svg class="svgOuter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141 141">
            ${this._customOuterCircle["icon-larger"]}
          </svg>
        `:
        html `
          <svg class="svgOuter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 116.24 117">
            ${this._customOuterCircle["icon-smaller"]}
          </svg>
        `
      }
  </div>
  <div id="padding"><slot name="icon-text"></slot></div>
</div>

`;}
