const {BaseService} = require('@ucd-lib/cork-app-utils');
const CollectionStore = require('../stores/CollectionStore');
const config = require('../config');

class CollectionService extends BaseService {

  constructor() {
    super();
    this.store = CollectionStore;

    // this.baseUrl = 'https://digital.ucdavis.edu/api/collections';
    // this.baseUrl = 'https://sandbox.dams.library.ucdavis.edu/api/collections';  // dev local, point to sandbox collections
    this.baseUrl = '/api/collections';
  }

  async overview() {
    return this.request({
      url : `${this.baseUrl}/all`,
      // dev local, point to sandbox collections
      // fetchOptions : {
      //   credentials : 'omit',
      //   mode : 'cors'
      // },
      checkCached : () => this.store.data.overview,
      onLoading : request => this.store.setCollectionOverviewLoading(request),
      onLoad : result => this.store.setCollectionOverviewLoaded(result.body),
      onError : e => this.store.setCollectionOverviewError(e)
    });
  }

  /**
   * @method searchCollection
   * @description Search the catalogs
   * 
   * @param {Object} searchDocument
   * 
   * @returns {Promise}
   */
  async search(searchDocument = {}) {
    searchDocument.textFields = config.elasticSearch.textFields.collection;
    return this.request({
      url : this.baseUrl+'/search?debug=true',
      fetchOptions : {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        // dev local, point to sandbox collections
        // credentials : 'omit',
        // mode : 'cors',
        body : JSON.stringify(searchDocument)
      },
      onLoading : promise => this.store.setSearchLoading(searchDocument, promise),
      onLoad : result => this.store.setSearchLoaded(searchDocument, result.body),
      onError : e => this.store.setSearchError(searchDocument, e)
    });
  }

}

module.exports = new CollectionService();