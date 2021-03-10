import { LitElement } from 'lit-element';
import render from "./app-browse-by.tpl.js";

/**
 * @class AppBrowseBy
 * @description base class for the browse by [facet] page elements
 */
export default class AppBrowseBy extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      facetQueryName : {type: String, attribute: 'facet-query-name'},
      label : {type: String},
      sortByOptions : {type: Array},
      results : {type: Array},
      totalResults : {type: Number},
      resultsPerPage : {type: Number},
      currentPage : {type: Number}
    };
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.sortByOptions = [
      {label : 'A-Z', type: 'key', selected: true},
      {label : 'Item Quantity', type: 'count'}
    ];

    this.reset();

    this._injectModel('BrowseByModel', 'AppStateModel');
  }

  /**
   * @method reset
   * @description reset search properties
   */
  reset() {
    this.results = [];
    this.totalResults = 0;
    this.resultsPerPage = 20;
    this.currentPage = 0;
    this.label = '';
  }

  /**
   * @method _onAppStateUpdate
   * @description bound to AppStateModel app-state-update event
   * 
   * @param {Object} e 
   * @returns {Promise} 
   */
  async _onAppStateUpdate(e) {
    if( e.location.page !== 'browse' ) return;
    if( e.location.path.length < 2 ) return;
    if( e.location.path[1] !== this.id ) return; // the page

    if( this.totalResults === 0 ) {
      this.loading = true;
      this.allResults = await this.BrowseByModel.getFacets(this.facetQueryName || this.label);
      this.loading = false;
    }

    if( e.location.path.length > 2 ) {
      this.currentPage = parseInt(e.location.path[2]);
    } else {
      this.currentPage = 0;
    }

    let sort = 0;
    if( e.location.path.length > 2 ) {
      sort = parseInt(e.location.path[2]);
    }
    this.sortByOptions.forEach((item, index) => item.selected = (sort === index));

    this._renderResults();
  }

  /**
   * @method _renderResults
   * @description render the results array based on currentPage and sort
   * params
   */
  _renderResults() {
    let sort = this.sortByOptions.find(item => item.selected).type;

    if( this.sortedAs !== sort ) {
      this.results.sort((a, b) => {
        if( a[sort] > b[sort] ) return 1;
        if( a[sort] < b[sort] ) return -1;
        return 0; 
      });
      this.sortedAs = sort;
    }

    this.results = this.allResults.payload.slice(
      this.resultsPerPage * this.currentPage, 
      (this.resultsPerPage * this.currentPage) + this.resultsPerPage 
    );

    this.requestUpdate();
  }

  /**
   * @method _onPaginationNav
   * @description bound to cork-pagination nav event
   * 
   * @param {Object} e 
   */
  _onPaginationNav(e) {

  }

  getFilterUrl(item) {
    return '';
  }


}

customElements.define('app-browse-by', AppBrowseBy);
