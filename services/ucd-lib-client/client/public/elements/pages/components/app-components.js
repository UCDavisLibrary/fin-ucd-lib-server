import { LitElement } from 'lit-element';
import render from "./app-components.tpl.js";

import "../../utils/app-collection-card";

import "@polymer/iron-icons";

import "../../components/filterButton";
import "../../components/icon";
import "../../components/nav-bar";
import "../../components/radioButton";
import "../../components/search-box";

import RecordInterface from "../../interfaces/RecordInterface"; 
import AppStateInterface from "../../interfaces/AppStateInterface";
import CollectionInterface from "../../interfaces/CollectionInterface";

export class AppPageComponents extends Mixin(LitElement)
.with(LitCorkUtils, EventInterface, RecordInterface, AppStateInterface, CollectionInterface) {

  static get properties() {
    return {

      visible: {type: Boolean}
    };
    } 
  constructor() {
    super();
    this._injectModel('CollectionModel', 'AppStateModel');

    this.render = render.bind(this);

    this.AppStateModel.get().then(e => this._onAppStateUpdate(e));
  }

  async _onAppStateUpdate(state) {
    requestAnimationFrame( () => this.doUpdate(state));
  }


  async doUpdate(state){
    console.log(state);
    await this.updateComplete;
    if (!this.visible) {
      return;
    }
    //await Promise.all([this.getWorks(), this.getSubjects() ,this.getOrgs()]);
  }

  _onSearch(e) {

    let searchDoc = this._getEmptySearchDocument();
    this._setTextFilter(searchDoc, e.detail);
    this.RecordModel.setSearchLocation(searchDoc);
  }

}
customElements.define('app-page-components', AppPageComponents);
