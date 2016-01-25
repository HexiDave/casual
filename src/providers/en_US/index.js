var providers = require('../');
var helpers = require('../../helpers');

var ownProviders = {
	address: require('./address')
};

module.exports = helpers.extend_provider(providers, helpers);