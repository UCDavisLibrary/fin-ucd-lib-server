import { LitElement } from 'lit-element';
import render from "./dams-collection-card.tpl.js";

/**
 * @class DamsCollectionCard
 * @description UI component class for displaying a collection preview card
 */
export default class DamsCollectionCard extends LitElement {

  static get properties() {
    return {
      collection: {type: Object},
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

  /**
   * @method updated
   * @description Lit lifecycle method called when element is updated.
   * @param {Map} props - Properties that have changed.
   */
  updated(props) {
    if ( props.has('collection') && this.collection['_id'] ) {
      this.imgSrc = this.collection.thumbnailUrl;
      this.cardTitle = this.collection.name;
      this.itemCt = this.collection.recordCount;
      this.href = this.collection['_id'];
    }
  }
}

customElements.define('dams-collection-card', DamsCollectionCard);
