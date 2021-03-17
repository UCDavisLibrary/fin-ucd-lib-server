import { LitElement } from 'lit-element';
import render from "./dams-highlighted-collection.tpl.js";


export default class DamsHighlightedCollection extends LitElement {

  static get properties() {
    return {
      collection: {type: Object},
      collectionTitle: {type: String, attribute: 'collection-title'},
      imgSrc: {type: String, attribute: 'img-src'},
      collectionDesc: {type: String, attribute: 'collection-desc'},
      itemCt: {type: Number, attribute: 'item-ct'},
      href: {type: String}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.collection = {};
    this.collectionTitle = "Eastman's Originals Collection";
  }

}

customElements.define('dams-highlighted-collection', DamsHighlightedCollection);
