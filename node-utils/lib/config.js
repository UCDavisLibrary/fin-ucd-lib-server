let {config} = require('@ucd-lib/fin-node-utils');

config.elasticsearch.fields = {
  exclude : ['indexableContent', 'indexableContents'],
  fill : ['hasPart', 'associatedMedia', 'caption', 'transcript']
}

module.exports = config;