import { LitElement, html } from 'lit-element';
import render from './search-box.tpl.js';

export class AppSearchBox extends LitElement {

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
      }
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.placeholder = "search";
  }

  get browseValue() {
    return this._browseValue || 'Browse';
  }

  set browseValue(value) {
    this._browseValue = value;
    this.$.select.value = value;
  }

  get value() {
    return this.$.input.value;
  }

  set value(value) {
    this.$.input.value = value;
  }

  _fireSearch() {
    this.dispatchEvent(
      new CustomEvent(
        'search', 
        {
          detail: this.$.input.value,
          bubbles: true, 
          composed: true
        }
      )
    );
  }

  _fireBrowse() {
    this.dispatchEvent(
      new CustomEvent(
        'browse', 
        {
          detail: this.$.select.value,
          bubbles: true, 
          composed: true
        }
      )
    );
  }

  _onKeyUp(e) {
    if( e.which !== 13 ) return;
    this._fireSearch();
  }

  _onBrowseOptionsChange() {
    this.$.select.innerHTML = '';

    var option = document.createElement('option');
    option.value = 'Browse';
    option.textContent = 'Browse';
    option.setAttribute('selected', 'selected');
    this.$.select.appendChild(option);

    var option = document.createElement('option');
    option.value = '';
    option.textContent = 'All Items';
    this.$.select.appendChild(option);

    for( let key in this.browse ) {
      option = document.createElement('option');
      option.textContent = this.browse[key];
      option.value = key;
      this.$.select.appendChild(option);
    };
  }

}
customElements.define('app-search-box', AppSearchBox);