import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

export default function render() { 
return html`
<style include="shared-styles">
  :host {
    display: block;
  }
  .nav {
    display: flex;
    background-image: linear-gradient( 110deg, var(--default-primary-color) 85%, var(--color-aggie-blue-80) 85% 86%, var(--color-aggie-blue-70) 86%);
    /*background-image: url(${this.background}); */
    background-size: cover;
    background-position: center;
    height: 50px;
  }
  #header{
    font-size: 1.68rem;
    padding:5px 30px;
    color: var(--color-aggie-gold);
  }
  .parallelogram {
    height: 50px;
    transform: skew(-20deg);
    background: transparent;
    display:flex;
    text-align:center;
    justify-content: center;
  	align-items: center;
    float: left;
    transition: 0.3s;
    padding: 0 20px;

}
    .parallelogram:hover, 
    .parallelogram:active
    {
        background: var(--color-aggie-gold);
    }
    .parallelogram a {
        color: white;
        transform: skew(20deg); /* UNSKEW */
        text-decoration: none;
        font-size: .84rem;

    }
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      width: inherit;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;

    }

    .dropdown-content a {
      float: none;
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      text-align: left;
    }
    .dropdown-content a:hover {background-color: #ddd;}

    .parallelogram:hover .dropdown-content {
      display: block;
    }
</style>
<div class="nav">
    <div id="header">Digital Collections</div>
    ${this.choices.map((choice) => html`
      <div class="dropdown">
        <div class="parallelogram"><a>${choice.text}</a></div>
        <div class="dropdown-content">
          ${choice.dropdown ? 
              choice.dropdown.map((option) => 
                html `<a href="${option.href}">${option.text}</a>`
              ): 
                html ``
           }
        </div>
      </div>
    `)}
</div>
`;}
