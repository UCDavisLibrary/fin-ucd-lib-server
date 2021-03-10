import { LitElement } from 'lit-element';
import render from "./dams-watercolor.tpl.js";

/**
 * @class DamsWatercolor
 * @description UI component class for displaying decorative watercolor images
 * @prop srcDir - Server directory containing watercolor assets
 * @prop srcFilePrefix - The requested watercolor pattern
 * @prop srcExt - The watercolor image extension type
 * @prop color - The watercolor image. See CSS custom variables for accepted values
 * @prop rotate - Degree to rotate watercolor
 * @prop width - Watercolor width
 * @prop height - Watercolor height
 * 
 */
export default class DamsWatercolor extends LitElement {

  static get properties() {
    return {
      srcDir: {type: String, attribute: 'src-dir'},
      srcFilePrefix: {type: String, attribute: 'src-file-prefix'},
      srcExt: {type: String, attribute: 'src-ext'},
      color: {type: String},
      rotate: {type: Number},
      width: {type: String},
      height: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.validateImgSrc();
    this.height = "";
    this.width = "";
    this.rotate = 0;
  }

  /**
   * @method validateImgSrc
   * @description Sets default value if any img src path components are missing.
   */
  validateImgSrc(){
    let pathDefaults = {
      srcDir: "/images/watercolors",
      srcFilePrefix: "watercolor",
      srcExt: "png",
      color: "blue"
    };
    for (const pathComponent in pathDefaults) {
      if (!this[pathComponent]) this[pathComponent] = pathDefaults[pathComponent];
    }
  }

  /**
   * @method getImgPath
   * @description Constructs image src attribute for watercolor
   * @param resolution - Image resolution: x-descriptors
   * @returns {String}
   */
  getImgSrc(resolution="1x") {
    this.validateImgSrc();
    let path = `${this.srcDir}/${this.srcFilePrefix}-${this.color}`;
    if (resolution && resolution !== "1x") path += `-${resolution}`;
    path += `.${this.srcExt}`;
    return path;
  }

  /**
   * @method getImgSrcSet
   * @description Constructs the img srcset attribute for water color
   * @returns {String}
   */
  getImgSrcSet(){
    return `${this.getImgSrc()}, ${this.getImgSrc('2x')} 2x`;
  }

  /**
   * @method getImgStyles
   * @description Constructs inline styles for watercolor img element
   * @returns {Object}
   */
  getImgStyles() {
    let styles = {};
    styles.transform = `rotate(${this.rotate}deg)`;
    return styles;
  }

}

customElements.define('dams-watercolor', DamsWatercolor);
