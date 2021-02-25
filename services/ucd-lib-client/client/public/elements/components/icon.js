import { LitElement, html } from 'lit-element';
import render from './icon.tpl.js';
import "@polymer/polymer/polymer-element"
import "@polymer/iron-icons/iron-icons"


import template from "./icon.tpl.js"



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
        circlePixelSize: {type: Number}

    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }  
}

customElements.define('app-icons', AppIcons);
