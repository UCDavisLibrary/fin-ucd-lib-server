import { LitElement } from 'lit-element';
import render from "./dams-watercolor.tpl.js";


/**
 * @class DamsWatercolor
 * @description UI component class for displaying decorative water color images
 */
export default class DamsWatercolor extends LitElement {

  static get properties() {
    return {
      srcDir: {type: String, attribute: 'src-dir'},
      srcFilePrefix: {type: String, attribute: 'src-file-prefix'},
      srcExt: {type: String, attribute: 'src-ext'},
      color: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.srcDir = "/images/watercolors";
    this.srcFilePrefix = "water-color";
    this.srcExt = "png";
    this.color = "blue";
  }

  /**
   * @method getImagePath
   * @description Constructs image src attribute for watercolor
   * @returns {String}
   */
  getImageSrc() {
    let path = `${this.srcDir}/${this.srcFilePrefix}-${this.color}`;
    path += `.${this.srcExt}`;
    return path;
  }

}

customElements.define('dams-watercolor', DamsWatercolor);
