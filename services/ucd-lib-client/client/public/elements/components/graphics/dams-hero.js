import { LitElement } from 'lit-element';
import render from "./dams-hero.tpl.js";

/**
 * @class DamsHero
 * @description UI component for displaying a hero image
 * @prop {Array} srcOptions - Set of images sources to randomly display
 * @prop {String} src - Background image source
 */
export default class DamsHero extends LitElement {

  static get properties() {
    return {
      src: {type: String},
      srcOptions: {type: Array, attribute: "src-options"},
      _selectedSrc: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.src = "";
    this.srcOptions = [];
  }

  /**
   * @method _setSrc
   * @description Sets the background image src property.
   */
  _setSrc(){
    let src = "";
    let setCt = this.srcOptions.length;
    if ( setCt === 0 && this.src ) src = this.src;
    if ( !src && setCt > 0 ) {
      src = Math.floor(Math.random() *  setCt + 1);
    }
    this._selectedSrc = src;
  }

}

customElements.define('dams-hero', DamsHero);
