let {config} = require('@ucd-lib/fin-node-utils');

config.elasticsearch.fields = {
  exclude : ['indexableContent', 'indexableContents'],
  fill : ['hasPart', 'associatedMedia', 'caption', 'transcript']
}
config.elasticsearch.applications = {
  record : {
    alias : 'fin-applications',
    schemaType : 'fin-applications'
  }
}

module.exports = config;