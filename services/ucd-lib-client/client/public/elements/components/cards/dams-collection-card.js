import { LitElement } from 'lit-element';
import render from "./dams-collection-card.tpl.js";

/**
 * @class DamsCollectionCard
 * @description UI component class for displaying a collection preview card
 */
export default class DamsCollectionCard extends LitElement {

  static get properties() {
    return {
      imgSrc: {type: String, attribute: 'img-src'},
      cardTitle: {type: String, attribute: 'card-title'},
      itemCt: {type: Number, attribute: 'item-ct'},
      href: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.imgSrc = "";
    this.cardTitle = "";
    this.itemCt = 0;
    this.href = "";

  }
}

customElements.define('dams-collection-card', DamsCollectionCard);
