import { LitElement } from 'lit-element';
import render from "./app-components.tpl.js";

import "../../components/graphics/dams-watercolor";
import "../../components/graphics/dams-watercolor-overlay";
import "../../components/filterButton";
import "../../components/icon";
import "../../components/nav-bar";
import "../../components/radioButton";
import "../../components/search-box";

/**
 * @class AppComponents
 * @description Page for showcasing site components
 */
export default class AppComponents extends LitElement {

  static get properties() {
    return {
      
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('app-components', AppComponents);
