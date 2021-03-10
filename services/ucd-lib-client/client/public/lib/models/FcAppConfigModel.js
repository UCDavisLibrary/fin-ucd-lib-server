const {BaseModel} = require('@ucd-lib/cork-app-utils');

/**
 * @class FcAppConfigModel
 * @description a wrapper class around APP_CONFIG.fcAppConfig which contains
 * the /application/ucd-lib-client graph from fcrepo.  Adds nice accessor 
 * methods
 */
class FcAppConfigModel extends BaseModel {
  
  constructor() {
    super();
    
    this.TYPES = {
      APPLICATION_CONTAINER : 'http://digital.ucdavis.edu/schema#ApplicationContainer'
    };

    this.byId = {};
    if( !Array.isArray(APP_CONFIG.fcAppConfig) ) {
      return; 
    }
    (APP_CONFIG.fcAppConfig || []).forEach(item => this.byId[item['@id']] = item);

    this.register('FcAppConfigModel');
  }

  /**
   * @method getFeaturedCollections
   * @description return any defined featured collections
   * 
   * @returns {Array}
   */
  getFeaturedCollections() {
    let appContainer = this.getApplicationContainer();
    return asArray(appContainer.featuredCollection)
      .map(item => {
        return this.byId[item['@id']];
      });
  }

  /**
   * @method getFeaturedImages
   * @description return any defined featured images
   * 
   * @returns {Array}
   */
  getFeaturedImages() {
    let appContainer = this.getApplicationContainer();
    return asArray(appContainer.featuredImage)
      .map(item => {
        return this.byId[item['@id']];
      });
  }

  /**
   * @method getApplicationContainer
   * @description return the main application container from the app graph
   * 
   * @returns {Object}
   */
  getApplicationContainer() {
    return (APP_CONFIG.fcAppConfig || [])
      .find(item => item['@type'].includes(this.TYPES.APPLICATION_CONTAINER));
  }

}

function asArray(val) {
  if( val === undefined ) return [];
  if( Array.isArray(val) ) return val;
  return [val];
}

module.exports = new FcAppConfigModel();