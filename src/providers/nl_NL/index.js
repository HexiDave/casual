var providers = require('../');
var helpers = require('../../helpers');

var ownProviders = {
	address: require('./address'),
	person: require('./person')
};

module.exports = helpers.extend_provider(providers, helpers);