var providers = require('../');
var helpers = require('../../helpers');

var ownProviders = {
	address: require('./address'),
	color: require('./color'),
	internet: require('./internet'),
	person: require('./person'),
	text: require('./text')
};

module.exports = helpers.extend_provider(providers, ownProviders);