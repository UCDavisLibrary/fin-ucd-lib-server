const es = require('../lib/esClient');
const config = require('../lib/config');
const ElasticSearchModel = require('./elasticsearch');

class ApplicationsModel extends ElasticSearchModel {

  /**
   * @method all
   * @description get all application
   * 
   * @returns {Promise} resolves to array of application objects
   */
  async get(appname) {
    let results = await this.esSearch({
      query : {
        bool : {
          filter : [
            {term : {'applicationId' : '/application/'+appname}},
          ]
        }
      },
      size : 10000
    });

    results = results.hits.hits.map(item => item._source);

    return results;
  }

    /**
   * @method esSearch
   * @description search the elasticsearch application using
   * es search document
   * 
   * @param {Object} body elasticsearch search body
   * 
   * @returns {Promise} resolves to elasticsearch result
   */
  esSearch(body = {}) {
    return es.search({
      index : config.elasticsearch.application.alias,
      body : body
    });
  }

}

module.exports = new ApplicationsModel();