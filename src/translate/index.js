//if window.Intl is not defined
if (!window.Intl){
window.Intl = require('intl');
  require('intl/locale-data/jsonp/en-US.js');
  require('intl/locale-data/jsonp/es.js');
}
// give format to dates
var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat');
// give format to text
var IntlMessageFormat = require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var es = require('./es');
var en = require('./en-US');

var MESSAGES = {};

MESSAGES.es = es;
MESSAGES['en-US'] = en;


//pipe that evaluates if the variable exist, 
//if not set the language as espanish for default
var locale = localStorage.locale || 'es';

module.exports =  {
message: function (text, opts) {
	opts = opts || {};
	var msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null);
	return msg.format(opts);
},
date: new IntlRelativeFormat(locale)

}



