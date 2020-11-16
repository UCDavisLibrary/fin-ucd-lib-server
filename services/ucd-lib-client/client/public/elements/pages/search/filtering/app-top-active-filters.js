import { LitElement } from 'lit-element';
import render from "./app-top-active-filters.tpl.js"


export default class AppTopActiveFilters extends Mixin(LitElement)
  .with(LitCorkUtils) {

  static get properties() {
    return {
      activeFilters : {type : Array}
    }
  }

  constructor() {
    super();
    this.render = render.bind(this);

    this.filters = {};
    this.activeFilters = [];

    this._injectModel('FiltersModel', 'RecordModel');
  }

  /**
   * @method _onFilterBucketsUpdate
   * @description bound the FiltersModel filter-buckets-update event
   * 
   * @param {Object} e 
   */
  _onFilterBucketsUpdate(e) {
    this.filters[e.filter] = e.buckets;
    if( this._renderTimer ) clearTimeout(this._renderTimer);
    this._renderTimer = setTimeout(() => {
      this._renderTimer = null;
      this._updateActiveFilters();
    }, 10);
  }

  /**
   * @method _updateActiveFilters
   * @description called after debouncing of filter-buckets-update events, set 
   * active filters
   */
  _updateActiveFilters() {
    let active = [];
    for( let key in this.filters ) {
      active = active.concat(
        this.filters[key]
          .filter(item => item.active)
          .map(item => Object.assign({bucket: key}, item))
      );
    }
    active.sort((a, b) => a.key.toLowerCase() < b.key.toLowerCase() ? -1 : 1);

    this.activeFilters = active;
    this.style.display = active.length ? 'block' : 'none';
  }

  /**
   * @method _onRemoveFilterClicked
   * @description bound to remove filter button click event
   * 
   * @param {Element} e 
   */
  _onRemoveFilterClicked(e) {
    let item = this.activeFilters.splice(parseInt(e.currentTarget.getAttribute('index')), 1)[0];

    let searchDoc = this.RecordModel.getCurrentSearchDocument();
    this.RecordModel.setPaging(searchDoc, 0);
    this.RecordModel.removeKeywordFilter(searchDoc, item.bucket, item.key);
    this.RecordModel.setSearchLocation(searchDoc);

    this.requestUpdate();
  }

}

customElements.define('app-top-active-filters', AppTopActiveFilters);
