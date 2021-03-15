import { LitElement } from 'lit-element';
import render from "./app-components.tpl.js";
import { sharedStyles } from "../../styles/shared-styles";

import "../../components/graphics/dams-watercolor";
import "../../components/graphics/dams-watercolor-overlay";
import "../../components/cards/dams-collection-card";
import "../../components/filterButton";
import "../../components/icon";
import "../../components/nav-bar";
import "../../components/radioButton";
import "../../components/search-box";
import "../../components/pagination";

/**
 * @class AppComponents
 * @description Page for showcasing site components
 */
export default class AppComponents extends LitElement {

  static get properties() {
    return {
      
    };
  }

  static get styles() {
    return [sharedStyles];
  }

  constructor() {
    super();
    this.render = render.bind(this);
  }

}

customElements.define('app-components', AppComponents);
