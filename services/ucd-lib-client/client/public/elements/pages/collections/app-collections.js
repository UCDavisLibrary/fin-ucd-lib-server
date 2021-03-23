import { LitElement, html} from 'lit-element';

import "@ucd-lib/fin-search-box";
import "../../utils/app-collection-card";

import "@polymer/iron-icons";

import "../../components/graphics/dams-watercolor";
import "../../components/graphics/dams-watercolor-overlay";
import "../../components/cards/dams-collection-card";
import "../../components/icon";
import "../../components/search-box";
import "../../components/nav-bar";
import "../../components/filterButton";
import "../../components/radioButton";
import "../../components/pagination";


import render from './app-collections.tpl.js';

import RecordInterface from "../../interfaces/RecordInterface"; 
import AppStateInterface from "../../interfaces/AppStateInterface";
import CollectionInterface from "../../interfaces/CollectionInterface";

/**
 * @class App Collections
 * @description collections page is rendered to the DAMS v2
 */
class AppCollections extends Mixin(LitElement)
  .with(EventInterface, RecordInterface, AppStateInterface, CollectionInterface) {

  static get properties() {
    return {
      hasPagination: {type: Boolean},
      pgPer: {type: Number},
      pgCurrent: {type: Number},
      items: {type: Array},
      itemsStatus: {type: String},
      itemsTotal: {type: Number},
      count : {type : String},
      choices: {
        type: Array
      },
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
    this.items = [];
    this.itemsTotal = 0;
    this.pgPer = 8;
    this.pgCurrent = 1;
  }

  /**
   * @method ready
   * @description It gets the model information for the Collections when 
   * function is fired.
   * 
   */
  // async ready() {
  //   super.ready();
  //   this._setCollections(await this.CollectionModel.overview());
  // }

  async firstUpdated() {
    this._setCollections(await this.CollectionModel.overview());

  }
  /**
   * @method _onAppStateUpdate
   * @description on the App update, the state is determined and by checking
   * the location
   * 
   * @param {Object} e 
   */
  _onAppStateUpdate(e) {
    if( e.location.hash === 'collections' ) {
      setTimeout(() => {
        let ele = this.shadowRoot.querySelector('#collections-home');
        if( ele ) ele.scrollIntoView();
      }, 25);
    }
  }

  /**
   * @method _setCollections
   * @description when the element is ready, the collection model is called 
   * for the collection list.  this renders is.
   * 
   * @param {Object} e 
   */
  _setCollections(e) {
    if( e.state !== 'loaded' ) return;
    console.log(e);
    let overview = e.payload;
    this.itemsTotal = e.payload.length;
    let browse = {};

    overview.sort((a,b) => {
      if( a.name > b.name ) return 1;
      if( a.name < b.name ) return -1;
      return 0;
    });

    overview.forEach(item => {
      browse[item['@id']] = item.name;
      if( !item.thumbnailUrl ) {
        item.thumbnailUrl = '/images/logos/logo-white-512.png';
      }

      if( item.workExample ) {
        item.thumbnail = '/fcrepo/rest'+item.workExample['@id']+'/svc:iiif/full/,320/0/default.jpg';
      } else {
        item.thumbnail = '/images/logos/logo-white-512.png';
      }
    });

    //this.$.searchBox.browse = browse;
    this.items = overview;
  }

  /**
   * @method _renderPagination
   * @description Renders the pagination element
   * @param {Number} totalResults - Total number of results of the current query.
   * 
   * @returns {TemplateResult}
   */
  _renderPagination(totalResults) {
    if (!totalResults || totalResults <= this.pgPer ) {
      return html``;
    }
    this.hasPagination = true;
    let maxPage = Math.ceil(totalResults / this.pgPer);
    return html`
    <dams-pagination max-page="${maxPage}"
                   current-page="${this.pgCurrent}"
                   @changed-page="${e => this._onUserAction("pagination", e.target.currentPage)}"
                   class="mt-3"
    ></dams-pagination>
    `;
  }


  /**
   * @method _onSearch
   * @description called from the search box button is clicked or
   * the enter key is hit.  set the text filter
   * @param {Object} e
   */
  _onSearch(e) {

    let searchDoc = this._getEmptySearchDocument();
    this._setTextFilter(searchDoc, e.detail);
    this.RecordModel.setSearchLocation(searchDoc);
  }

  /**
   * @method _onCollectionClicked
   * @description called when collection img on home page is clicked 
   * @param {Object} e
   */
  _onCollectionClicked(e) {
    if( e.type === 'keyup' && e.which !== 13 ) return;
    let id = e.currentTarget.getAttribute('data-id');
    this._onCollectionSelected(id);
  }

  /**
   * @method _onCollectionSelected
   * @description filter based on a collection using short ids.
   * @param {String} id
   * 
   */
  _onCollectionSelected(id) {
    this._setWindowLocation(id);
  }
  
}

customElements.define('app-collections', AppCollections);