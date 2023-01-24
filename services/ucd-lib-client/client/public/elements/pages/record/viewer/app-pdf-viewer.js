import {PolymerElement} from "@polymer/polymer/polymer-element"
import "@polymer/paper-spinner/paper-spinner-lite"
import template from "./app-pdf-viewer.html"

import utils from "../../../../lib/utils"

import AppStateInterface from "../../../interfaces/AppStateInterface"
import MediaInterface from "../../../interfaces/MediaInterface"

export default class AppPdfViewer extends Mixin(PolymerElement)
  .with(EventInterface, AppStateInterface, MediaInterface) {
  
  static get template() {
    let tag = document.createElement('template');
    tag.innerHTML = template;
    return tag;
  }

  static get properties() {
    return {
      record : {
        type : Object,
        value : () => {}
      },
      media : {
        type : Object,
        value : () => {}
      },
      mediaUrl : {
        type : String,
        value : ''
      },
      loading: {
        type : Boolean,
        value : false
      },
      height : {
        type : Number,
        value : 600
      }
    }
  }

  constructor() {
    super();
    this.active = true;
  }

  async ready() {
    super.ready();

    let selectedRecordMedia = await this.AppStateModel.getSelectedRecordMedia();
    if( selectedRecordMedia ) this._onSelectedRecordMediaUpdate(selectedRecordMedia);
  }

  /**
   * @method _onSelectedRecordMediaUpdate
   * @description from AppStateInterface, called when a records media is selected
   * 
   * @param {Object} media 
   */
  _onSelectedRecordMediaUpdate(media) {
    if( !media ) return;
    let getMediaType = utils.getMediaType(media);
    if( getMediaType !== 'ImageList' && getMediaType !== 'ImageObject' ) return;

    this.media = media;
    this.mediaUrl = '/fcrepo/rest' + this.media['@id'];
  }
}

customElements.define('app-pdf-viewer', AppPdfViewer);