import { LitElement} from 'lit-element';

import "@ucd-lib/fin-search-box";
import "../../utils/app-collection-card";

import "@polymer/iron-icons";

import "../../components/icon";
import "../../components/search-box";
import "../../components/nav-bar";
import "../../components/filterButton";
import "../../components/graphics/dams-watercolor";
import "../../components/graphics/dams-watercolor-overlay";

import "../../components/cards/dams-collection-card";
import "../../components/graphics/dams-hero";
import "../../components/sections/dams-highlighted-collection";

import render from './app-home.tpl.js';

import RecordInterface from "../../interfaces/RecordInterface"; 
import AppStateInterface from "../../interfaces/AppStateInterface";
import CollectionInterface from "../../interfaces/CollectionInterface";

/**
 * @class AppHome
 * @description home page is rendered to the DAMS v2
 * 
 * @prop {Object[]} featuredCollections - Collections to  be displayed on homepage. Retrieved by model.
 * @prop {Number} featuredCollectionsCt - Total number of featured collections.
 * @prop {Object[]} recentCollections - Array of recently uploaded collections.
 * @prop {Boolean} showCollectionGroup - Displays the featured multi-collection section.
 */
class AppHome extends Mixin(LitElement)
  .with(EventInterface, RecordInterface, AppStateInterface, CollectionInterface) {
  
  static get properties() {
    return {
      featuredCollections: {type : Array},
      featuredCollectionsCt: {type: Number},
      recentCollections: {type: Array},
      showCollectionGroup: {type: Boolean}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);
    this.active = true;
    this.featuredCollections = [];
    this.featuredCollectionsCt = 0;
    this.showCollectionGroup = false;
    this.recentCollections = [];
    this._injectModel('FcAppConfigModel');
    this._injectModel('CollectionModel');
  }


  /**
   * @method firstUpdated
   * @description Lit lifecycle method called when element is first updated
   */
  async firstUpdated() {
    this.featuredCollections = this.FcAppConfigModel.getFeaturedCollections();
    this.featuredCollectionsCt = this.featuredCollections.length;

    // todo: set if we have featured text and more than one featured collection
    this.showCollectionGroup = true;
    console.log(this.featuredCollections);

    let d = await this.CollectionModel.getRecentCollections();
    if ( d.response.ok && Array.isArray(APP_CONFIG.collections) ) {
      d.body.results.forEach(item => {
        let collectionData = APP_CONFIG.collections.find(c => c['@id'] === item['@id']);
        if ( collectionData ) this.recentCollections.push(collectionData);
      });
    }
    this.requestUpdate();
    
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

customElements.define('app-home', AppHome);