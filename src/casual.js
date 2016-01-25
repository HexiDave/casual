var helpers = require('./helpers');

var build_casual = function() {
	var casual = helpers.extend({}, helpers);

	casual.functions = function() {
		var adapter = {};

		Object.keys(this).forEach(function(name) {
			if (name[0] === '_') {
				adapter[name.slice(1)] = casual[name];
			}
		});

		return adapter;
	};

	var locales = [
		'en_US',
		'ru_RU',
		'uk_UA',
		'nl_NL',
		'en_CA',
		'it_CH',
		'de_DE'
	];

	locales.forEach(function(locale) {
		casual.define(locale, function() {
			var casual = build_casual();

			var localeProviders = require('./providers/' + locale + "/index");
			Object.keys(localeProviders).forEach(function(providerKey) {
				casual.register_provider(localeProviders[providerKey]);
			});

			return casual;
		})
	});

	return casual;
};

// Default locale is en_US
module.exports = build_casual().en_US;
