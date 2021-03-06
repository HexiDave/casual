var providers = require('../');
var helpers = require('../../helpers');

var ownProviders = {
	address: require('./address'),
	date: require('./date'),
	person: require('./person')
};

module.exports = helpers.extend_provider(providers, ownProviders);