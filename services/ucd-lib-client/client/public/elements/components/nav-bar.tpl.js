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
    background-image: linear-gradient( 115deg, var(--default-primary-color) 85%, var(--color-aggie-blue-80) 85% 87%, var(--color-aggie-blue-70) 87%);
    /*background-image: url(${this.background}); */
    background-size: cover;
    background-position: center;
    height: 50px;
  }
  #header{
    font-size: 2.05rem;
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

    }
</style>
<div class="nav">
    <div id="header">Digital Collections</div>

    ${this.choices.map((choice) => html`
        <div class="parallelogram"><a>${choice.text}</a></div>
    `)}
</div>
`;}
