import { html } from 'lit-element';

export default function render() { 
return html`
<style include="shared-styles">
    :host {
      display: inline-block;
    }
    .icon {
      height: 24px;
      width: 24px;
    }

    .icon.rp {
      fill: currentColor;
      width: 25px;
      height: 25px;
    }

    .icon.extralgSVGIcon {
      fill: currentColor;
      width: 40px;
      height: 40px;
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

    }

</style>
<div class="container">
  <div class="circle-icon" >
    <iron-icon class="icon" icon="search" ></iron-icon>
  </div>
  <div><slot name="icon-text"></slot></div>
</div>
`;}
