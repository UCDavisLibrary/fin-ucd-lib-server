import { LitElement, html, svg} from 'lit-element';
import render from './icon.tpl.js';
import "@polymer/polymer/polymer-element";
import "@polymer/iron-icons/iron-icons";
import { styleMap } from 'lit-html/directives/style-map';



/**
 * @class AppIcons
 * @description Icons for the DAMS app
 */
export default class AppIcons extends LitElement {


  static get properties() {
    return { 
      size: {type: String},
      icon: {type: String},
      themeColor: {type: String, attribute: 'theme-color'},
      isLink: {type: Boolean, attribute: 'is-link'},
      circleBg: {type: Boolean, attribute: 'circle-bg'},
      hasText: {type: Boolean, attribute: 'has-text'},
      sizeIcon: {type: String, attribute: 'size-icon'},
      sizeIconSVG:  {type: String, attribute: 'size-icon-svg'},
      _customIcons: {type: Object},
      iconPixelSize: {type: Number},
      circlePixelSize: {type: Number},
      outerCircleSize: {type: Number},
      parentWidth: {type: String}

    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.icon = "";
    this.themeColor = "";
    this.isLink = false;
    this.circleBg = false;
    this.hasText = false;
    this.size = "";
    this.outerCircleSize = "";
    this.sizeIcon = "";
    this.sizeIconSVG = "";
    this.iconPixelSize = 24;
    this.circlePixelSize = this.iconPixelSize + 6;
    this.parentWidth = '145';

    this._customOuterCircle = {
      'icon-smaller': svg`<path d="M58,117a3,3,0,0,1,0-6h.21a3,3,0,1,1,0,6v-3l-.07,3ZM45,115.43a3.25,3.25,0,
                                   0,1-.69-.08l-.11,0a3,3,0,0,1-2.27-3.62,3,3,0,0,1,3.57-2.24l.13,0a3,3,0,0,
                                   1,2.25,3.63A3,3,0,0,1,45,115.43Zm26.36,0a3,3,0,0,1-.69-5.93l.15,0a3,3,0,
                                   1,1,1.48,5.81l-.25.06A2.72,2.72,0,0,1,71.31,115.43Zm-38.87-4.71a3,3,0,0,
                                   1-1.37-.34l-.24-.12A3,3,0,0,1,33.69,105l.13.07a3,3,0,0,1-1.38,5.67Zm51.39,
                                   0a3,3,0,0,1-1.43-5.64l.21-.12a3,3,0,0,1,2.79,5.32l-.15.07A2.92,2.92,0,0,1,
                                   83.83,110.71Zm-62.41-7.58a3,3,0,0,1-2-.75l-.15-.13a3,3,0,1,1,4-4.5l.15.14a3,
                                   3,0,0,1-2,5.24Zm73.42,0a3,3,0,0,1-2-5.22l.17-.16a3,3,0,0,1,4,4.5l-.12.11A3,
                                   3,0,0,1,94.84,103.12Zm-82.35-10a2.93,2.93,0,0,1-2.42-1.26L10,91.8a3,3,0,0,1,
                                   .67-4.22,3,3,0,0,1,4.16.66l.09.13a3,3,0,0,1-2.45,4.76Zm91.24,0a2.93,2.93,0,
                                   0,1-1.67-.51,3,3,0,0,1-.81-4.14l.07-.1a3,3,0,0,1,4.2-.81,3,3,0,0,1,.8,
                                   4.13l-.07.1A3,3,0,0,1,103.73,93.09ZM6.27,81.34a3,3,0,0,1-2.8-1.93l-.08-.21A3,
                                   3,0,0,1,9,77.09l.06.17a3,3,0,0,1-1.72,3.88A3.17,3.17,0,0,1,6.27,81.34Zm103.71,
                                   0a3.21,3.21,0,0,1-1-.18,3,3,0,0,1-1.77-3.86l.08-.23a3,3,0,1,1,5.6,2.16l0,.15A3,
                                   3,0,0,1,110,81.31ZM3,68.36a3,3,0,0,1-3-2.65l0-.16a3,3,0,0,1,6-.78L6,65a3,3,0,0,
                                   1-2.63,3.33Zm110.17,0a2.56,2.56,0,0,1-.39,0,3,3,0,0,1-2.59-3.36l0-.16a3,3,0,0,1,
                                   6,.69l0,.25A3,3,0,0,1,113.21,68.33ZM3,55l-.35,0A3,3,0,0,1,0,51.64l0-.2a3,3,0,0,
                                   1,6,.69l0,.2A3,3,0,0,1,3,55Zm110.24,0a3,3,0,0,1-3-2.61l0-.25a3,3,0,1,1,6-.69v.15a3,
                                   3,0,0,1-2.58,3.37A2.56,2.56,0,0,1,113.24,55Zm-3.15-13A3,3,0,0,1,107.28,40l-.07-.17a3,
                                   3,0,0,1,5.6-2.16l.09.22A3,3,0,0,1,110.09,42Zm-103.95,0a3,3,0,0,1-1-.18A3,3,0,0,1,
                                   3.34,38s0-.09,0-.1A3,3,0,0,1,7.23,36,3,3,0,0,1,9,39.82L9,40A3.07,3.07,0,0,1,6.14,
                                   41.94Zm6.19-11.81a3,3,0,0,1-1.69-.53,3,3,0,0,1-.78-4.17l.12-.18a3,3,0,0,1,4.94,
                                   3.41l-.11.16A3,3,0,0,1,12.33,30.13Zm91.57,0a3,3,0,0,1-2.46-1.27l-.13-.2a3,3,0,0,
                                   1,5-3.39l.1.14a3,3,0,0,1-.74,4.18A2.94,2.94,0,0,1,103.9,30.11Zm-82.73-10a3,3,0,0,
                                   1-2-5.25l.13-.11a3,3,0,1,1,4,4.45l-.17.15A3,3,0,0,1,21.17,20.09Zm73.89,0a3,3,0,0,
                                   1-2-.75l-.15-.14a3,3,0,1,1,4-4.49l.15.13a3,3,0,0,1-2,5.25ZM32.15,12.44a3,3,0,0,
                                   1-1.4-5.65l.14-.08A3,3,0,1,1,33.75,12l-.21.11A3.06,3.06,0,0,1,32.15,12.44Zm51.93,
                                   0a3,3,0,0,1-1.4-.36L82.53,12a3,3,0,0,1,2.75-5.34l.21.12a3,3,0,0,1-1.41,5.65ZM44.62,
                                   7.65a3,3,0,0,1-.73-5.9l.25-.06a3,3,0,0,1,1.37,5.83l-.15,0A3.06,3.06,0,0,1,44.62,
                                   7.65Zm27,0a3.25,3.25,0,0,1-.69-.08l-.25-.06a3,3,0,1,1,1.48-5.82l.14,0a3,3,0,0,
                                   1-.68,5.92ZM57.89,6a3,3,0,0,1,0-6h.44a3,3,0,0,1,0,6h-.44Z" id="dotted-small" />`,
      'icon-larger' : svg`<path d="M70.59,141h-.2a3,3,0,1,1,0-6h.11a3,3,0,0,1,3,3A3,3,0,0,1,70.59,141Zm13-1.26a3,
                                   3,0,0,1-.6-5.94l.23-.05a3,3,0,1,1,1.14,5.9l-.15,0A3.34,3.34,0,0,1,83.55,
                                   139.74Zm-26.12,0a2.76,2.76,0,0,1-.57-.06l-.24-.05a3,3,0,1,1,1.21-5.87l.16,
                                   0a3,3,0,0,1-.56,6Zm38.79-3.81A3,3,0,0,1,95,130.17l.22-.09a3,3,0,1,1,2.29,
                                   5.54l-.15.06A2.88,2.88,0,0,1,96.22,135.93Zm-51.46,0a2.87,2.87,0,0,
                                   1-1.14-.23l-.22-.09a3,3,0,0,1,2.34-5.52l.15.06a3,3,0,0,1-1.13,5.78Zm63.14-6.22a3,
                                   3,0,0,1-1.68-5.49l.18-.11a3,3,0,1,1,3.33,5l-.16.1A3,3,0,0,1,107.9,129.7Zm-74.82,
                                   0a3,3,0,0,1-1.66-.5l-.16-.11a3,3,0,1,1,3.31-5l.18.11a3,3,0,0,1-1.67,5.5Zm85.06-8.36A3,
                                   3,0,0,1,116,116.2l.15-.14a3,3,0,0,1,4.24,4.24l-.14.15A3,3,0,0,1,118.14,121.33Zm-95.29,
                                   0a3,3,0,0,1-2.11-.87l-.17-.16a3,3,0,1,1,4.27-4.22l.12.12a3,3,0,0,1-2.11,
                                   5.13Zm103.7-10.19a3,3,0,0,1-2.49-4.66l.11-.17a3,3,0,1,1,5,3.33l-.11.16A3,3,0,0,
                                   1,126.55,111.12Zm-112.11,0a3,3,0,0,1-2.5-1.34l-.09-.13a3,3,0,1,1,4.94-3.4l.14.2a3,3,
                                   0,0,1-.83,4.16A2.92,2.92,0,0,1,14.44,111.1ZM132.82,99.47a3.11,3.11,0,0,1-1.18-.24,3,
                                   3,0,0,1-1.57-3.94l.05-.13a3,3,0,1,1,5.56,2.25l-.1.24A3,3,0,0,1,132.82,99.47Zm-124.65,
                                   0a3,3,0,0,1-2.78-1.86l-.07-.18a3,3,0,1,1,5.54-2.29l.08.18a3,3,0,0,1-1.63,3.92A2.87,
                                   2.87,0,0,1,8.17,99.45ZM136.69,86.82a3.23,3.23,0,0,1-.61-.06,3,3,0,0,1-2.33-3.55l0-.16a3,
                                   3,0,0,1,5.89,1.14l0,.23A3,3,0,0,1,136.69,86.82ZM4.31,86.8a3,3,0,0,1-2.94-2.41l-.05-.23A3,
                                   3,0,1,1,7.22,83l0,.16a3,3,0,0,1-2.94,3.6ZM138,73.66a3,3,0,0,1-3-3V70.5a3,3,0,0,1,3-3,3,3,
                                   0,0,1,3,3v.2A3,3,0,0,1,138,73.66Zm-135,0a3,3,0,0,1-3-3V70.5a3,3,0,0,1,3-3,3,3,0,0,1,3,
                                   3v.2A3,3,0,0,1,3,73.63ZM136.74,60.49a3,3,0,0,1-2.93-2.4l-.05-.23a3,3,0,1,1,5.89-1.14l0,
                                   .16a3,3,0,0,1-2.34,3.55A3.15,3.15,0,0,1,136.74,60.49Zm-132.48,0a2.76,2.76,0,0,1-.57-.06A3,
                                   3,0,0,1,1.31,56.9l0-.16a3,3,0,0,1,3.54-2.38,3,3,0,0,1,2.36,3.49l0,.19A3,3,0,0,1,4.26,
                                   60.47ZM132.94,47.82A3,3,0,0,1,130.17,46l-.08-.18a3,3,0,0,1,5.55-2.29l.08.18a3,3,0,0,
                                   1-1.63,3.92A2.92,2.92,0,0,1,132.94,47.82ZM8.06,47.8a3,3,0,0,1-2.77-4.13l.09-.22a3,3,0,
                                   0,1,5.53,2.32l-.06.16A3,3,0,0,1,8.06,47.8ZM126.73,36.14a3,3,0,0,1-2.48-1.31l-.13-.19a3,3,
                                   0,0,1,5-3.33l.1.15a3,3,0,0,1-2.48,4.68Zm-112.45,0a3,3,0,0,1-2.49-4.66l.11-.17a3,3,0,1,1,
                                   5,3.33l-.11.17A3,3,0,0,1,14.28,36.12Zm104-10.24a2.92,2.92,0,0,1-2-.84l-.13-.12a3,3,0,0,1,
                                   0-4.27,3,3,0,0,1,4.22,0l0,.06a3,3,0,0,1-2.08,5.19Zm-95.63,0a3,3,0,0,1-2.15-5.07l.06-.07a3,
                                   3,0,0,1,4.28-.07A3,3,0,0,1,25,24.84l-.11.1A3,3,0,0,1,22.68,25.84Zm85.47-8.37a3,3,0,0,
                                   1-1.69-.52l-.13-.09a3,3,0,1,1,3.32-5l.2.14a3,3,0,0,1-1.7,5.47Zm-75.26,0A3,3,0,0,1,31.19,
                                   12l0,0,.1-.06a3,3,0,1,1,3.4,4.93l-.16.12A3.06,3.06,0,0,1,32.89,17.44ZM96.51,11.2A3,3,0,0,
                                   1,95.34,11l-.15-.07a3,3,0,0,1,2.27-5.55l.23.09a3,3,0,0,1-1.18,5.77Zm-52,0a3,3,0,0,
                                   1-1.14-5.78l.14-.06a3,3,0,0,1,2.37,5.52l-.22.09A3.14,3.14,0,0,1,44.51,11.19ZM83.86,
                                   7.32a3.23,3.23,0,0,1-.61-.06l-.15,0a3,3,0,0,1,1.13-5.89l.24,0a3,3,0,0,1-.61,5.94Zm-26.7,
                                   0a3,3,0,0,1-.57-5.95l.16,0A3,3,0,0,1,58,7.22l-.24,0A2.76,2.76,0,0,1,57.16,7.32ZM70.32,
                                   6a3,3,0,0,1,0-6h.38a3,3,0,0,1,0,6Z" id="dotted-large"/>`
    };
    this._customIcons = {
      'search': svg`<path d="M21.55,19.4l-4.14-4.15a8.44,8.44,0,1,0-2.16,2.16l4.15,4.15a1.55,1.55,0,0,0,1.08.44,1.52,1.52,0,0,0,1.07-2.6ZM5.05,10.45a5.41,5.41,0,1,1,5.4,5.4A5.4,5.4,0,0,1,5.05,10.45Z"/>`,
      'qr': svg`<path d="M3,3V8.25H8.25V3ZM6.75,6.75H4.5V4.5H6.75Z"/>
        <path d="M3,15.75V21H8.25V15.75ZM6.75,19.5H4.5V17.25H6.75Z"/>
        <path d="M15.75,3V8.25H21V3ZM19.5,6.75H17.25V4.5H19.5Z"/>
        <polygon points="19.5 9.75 19.5 14.25 15.75 14.25 15.75 15.75 21 15.75 21 9.75 19.5 9.75"/>
        <polygon points="15.75 17.25 15.75 21 17.25 21 17.25 18.75 19.5 18.75 19.5 21 21 21 21 17.25 15.75 17.25"/>
        <polygon points="9.75 3 9.75 4.5 12.75 4.5 12.75 8.25 14.25 8.25 14.25 3 9.75 3"/>
        <polygon points="12.75 9.75 12.75 12.75 9.75 12.75 9.75 17.25 12.75 17.25 12.75 21 14.25 21 14.25 15.75 11.25 15.75 11.25 14.25 14.25 14.25 14.25 11.25 15.75 11.25 15.75 12.75 17.25 12.75 17.25 9.75 12.75 9.75"/>
        <rect x="9.75" y="18.75" width="1.5" height="2.25"/>
        <rect x="6" y="12.75" width="2.25" height="1.5"/>
        <polygon points="9.75 6 9.75 9.75 3 9.75 3 14.25 4.5 14.25 4.5 11.25 11.25 11.25 11.25 6 9.75 6"/>`,
      'filter': svg`<path d="M22,1H2A1,1,0,0,0,1.3,2.76l8,8v8.85a1,1,0,0,0,.44.85l3.44,2.4A1,1,0,0,0,14.75,22V10.71l8-8A1,1,0,0,0,22,1Z"/>`
    };
  }
  
  /**
   * @method getIconSize
   * @description return the size of the icon depending on the 
   * assigned sizeIcon
   * @returns {Integer} 
   */
  getIconSize(){
    let size = this.iconPixelSize;
    if (this.sizeIconSVG == 'extralg' || this.sizeIcon == 'extralg')  {
      size = 64;
    }
    else if (this.sizeIconSVG == 'lg' || this.sizeIcon == 'lg') {
      size = 40;
    }

    return size;
  }

  /**
   * @method getIconSizeStyles
   * @description return the object of the style assigned
   * icons and calls the getIconSize
   * @returns {Object} 
   */
  getIconSizeStyles(){
    let size = `${this.getIconSize()}px`;
    return {'width': size,'min-width': size,'height': size, 'display': 'block', 'margin': '0 auto' };
  }

  /**
   * @method getParentSize
   * @description returns the size of the circle based on the 
   * size of the icon
   * @returns {Integer} 
   */
  getParentSize(){
    let size = '';
    if (this.size == 'lg') {
      size = '115';
    }
    else if ( this.size == 'extralg') {
      size = '145';
    }
    return size;
  }



  /**
   * @method getCircleSizeStyles
   * @description return the object of the style assigned
   * circles of icon and calls the getCircleSize
   * @returns {Object} 
   */
  getParentSizeStyles(){
    let size = `${this.getParentSize()}px`;
    console.log(size);
    return {'position':'relative','width':size, 'height':size,};
  }

  /**
   * @method getCircleSize
   * @description returns the size of the circle based on the 
   * size of the icon
   * @returns {Integer} 
   */
  getCircleSize(){
    let size = this.circlePixelSize;
    if (this.size == 'lg') {
      size = 86;
    }
    else if ( this.size == 'extralg') {
      size = 110;
    }
    return size;
  }



  /**
   * @method getCircleSizeStyles
   * @description return the object of the style assigned
   * circles of icon and calls the getCircleSize
   * @returns {Object} 
   */
  getCircleSizeStyles(){
    let size = `${this.getCircleSize()}px`;
    return {'width': size, "min-width": size, 'height': size, 'text-align':'center', 'justify-content': 'center', 'display': 'flex', 'align-items': 'center'};
  }

  /**
   * @method _constructClasses
   * @description Constructs CSS classes based on element properties
   * 
   * @returns {Object}
   */
  constructClasses() {
    let classes = {};
    if ( (!this.icon ) || (this.icon == "iron-") ) {
      classes['noicon'] = true;
      return classes;
    }
    if (this.icon.startsWith('fin-') && !this._isCustomIcon(this.icon)) {
      classes['noicon'] = true;
      return classes;
    }
    if (this.circleBg) {
      classes.circle = true;
    }
    if (this.isLink) {
      classes.link = true;
    }
    if (this.themeColor) {
      classes[this.themeColor] = true;
    }
    if (this.size) {
      classes[this.size] = true;
    }
    if(this.hasText){
      classes.text = true;
    }
    if(this.sizeIcon){
      classes[this.sizeIcon] = true;
    }
    if(this.sizeIconSVG){
      classes[this.sizeIconSVG] = true;
    }
    if(this.outerCircleSize){
      classes[this.outerCircleSize] = true;
    }
    return classes;
  }

  /**
   * @method _calculateViewBox
   * @description return the calcuation of the viewbox
   * for each icon size and calls getIconSize
   * @returns {String} 
   */
  _calculateViewBox() {
    //let size = this.getIconSize();
    //console.log(size);
    return `0 0 24 24`;
  }

  /**
   * @method renderIcon
   * @description renders the icon depending on if it is
   * and iron icon or a custom icon as an html
   * @returns {HTML} 
   */
  renderIcon() {
    if ( (!this.icon ) || (this.icon == "iron-") ) {
      return html``;
    }
    if (this.icon.startsWith('iron-')) {
      let icon = this.icon.split("-").slice(1).join('-');

      return html`<iron-icon class="icon ${this.sizeIcon ? this.sizeIcon : ''}" icon="${icon}" style="${styleMap(this.getIconSizeStyles())}"></iron-icon>`;

    }
    if (this._isCustomIcon(this.icon)) {
      let icon = this.icon.split("-").slice(1).join('-');
      return html`<svg id="svg" class="icon fin ${this.sizeIconSVG ? this.sizeIconSVG : ''}" viewBox="${this._calculateViewBox()}" style="${styleMap(this.getIconSizeStyles())}" xmlns="http://www.w3.org/2000/svg">${this._renderCustomIcon(icon)}</svg>`; 
    }
    return html``;
  }

  /**
   * @method _renderCustomIcon
   * @param {Object} icon
   * @description returns the custom icon definition defined
   * above in the constructor
   * @returns {HTML} 
   */
  _renderCustomIcon(icon) {
    return this._customIcons[icon];
  }

  /**
   * @method _isCustomIcon
   * @param {Object} icon
   * @description returns if it is a custom icon or not
   * 
   * @returns {Boolean} 
   */
  _isCustomIcon(icon){
    if (icon.startsWith('fin-')) icon = icon.split("-").slice(1).join('-');
    if (Object.keys(this._customIcons).includes(icon)) {
      return true;
    }
    return false;
  }
}

customElements.define('app-icons', AppIcons);
