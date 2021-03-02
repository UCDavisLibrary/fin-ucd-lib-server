import { LitElement} from 'lit-element';
import render from './nav-bar.tpl.js';
import "@polymer/polymer/polymer-element";
import "@polymer/iron-icons/iron-icons";

/**
 * @class AppNavBar
 * @description UI component for the Navigation Bar
 */
export class AppNavBar extends LitElement {

  static get properties() {
    return {
      placeholder : {
        type : String,
        value : ''
      },
      browse : {
        type : Object,
        observer : '_onBrowseOptionsChange',
        value : () => ({})
      },
      background : {
        type: String,
        value: ''
      },
      choices: {
        type: Array
      },

    };

  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.placeholder = "";
    this.searchValue = "";
    this.background = '/images/home-gradient.png';
  }



}
customElements.define('app-nav-bar', AppNavBar);