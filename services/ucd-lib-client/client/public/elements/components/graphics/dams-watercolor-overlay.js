import { LitElement } from 'lit-element';
import render from "./dams-watercolor-overlay.tpl.js";

/**
 * @class DamsWatercolorOverlay
 * @description UI component class that overlays an image or icon over watercolor artwork
 * 
 * @prop wcPattern - Watercolor pattern to use
 * @prop wcColor - Color of background watercolor
 * @prop wcRotation - Rotation (in degrees) of background watercolor
 * @prop imgSrc - Path to the overlay image
 * @prop icon - Iron Icon to overlay over watercolor (use this OR imgSrc)
 * @prop overlayWidth - The width of the overlayed asset in pixels
 * @prop overlayHeight - The height of the overlayed asset in pixels
 * @prop overlayTop - Where the overlayed asset should be placed on the Y axis
 * @prop overlayLeft - Where the overlayed asset should be placed on the X axis
 */
export default class DamsWatercolorOverlay extends LitElement {

  static get properties() {
    return {
      wcPattern: {type: String, attribute: "wc-pattern"},
      wcColor: {type: String, attribute: "wc-color"},
      wcRotation: {type: Number, attribute: "wc-rotation"},
      overlayWidth: {type: Number, attribute: "overlay-width"},
      overlayHeight: {type: Number, attribute: "overlay-height"},
      imgSrc: {type: String, attribute: "img-src"},
      imgPosition: {type: String, attribute: "img-position"},
      overlayTop: {type: String, attribute: "overlay-top"},
      overlayLeft: {type: String, attribute: "overlay-left"},
      icon: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.wcPattern = "";
    this.wcColor = "";
    this.wcRotation = 0;
    this.overlayWidth = 100;
    this.overlayHeight = 100;
    this.imgSrc = "";
    this.overlayTop = "";
    this.overlayLeft = "";
    this.imgPosition = "center center";
    this.icon = "";
    this.iconColor = "#ffffff";
  }

  /**
   * @method getImgStyles
   * @description Constructs styles for the overlay image. Bound to '.img-container'
   * @returns {Object}
   */
  getImgStyles(){
    if ( !this.imgSrc ) return {};
    let styles = {
      width: `${this.overlayWidth}px`,
      height: `${this.overlayHeight}px`,
      'background-image': `url(${this.imgSrc})`,
      'background-position': this.imgPosition,
      top: this.overlayTop ? this.overlayTop : `calc(50% - ${this.overlayWidth/2}px)`,
      left: this.overlayLeft ? this.overlayLeft : `calc(50% - ${this.overlayHeight/2}px)`
    };
    return styles;
  }

  /**
   * @method getIconStyles
   * @description Constructs styles for the overlay icon. Bound to iron-icon
   * @returns {Object}
   */
  getIconStyles(){
    if ( !this.icon ) return {};
    let styles = {
      width: `${this.overlayWidth}px`,
      height: `${this.overlayHeight}px`,
      top: this.overlayTop ? this.overlayTop : `calc(50% - ${this.overlayWidth/2}px)`,
      left: this.overlayLeft ? this.overlayLeft : `calc(50% - ${this.overlayHeight/2}px)`,
      color: this.iconColor
    };
    return styles;
  }

}

customElements.define('dams-watercolor-overlay', DamsWatercolorOverlay);