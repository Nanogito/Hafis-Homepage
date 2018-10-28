const fs = require('fs');
const util = require('util');

const dom = require('./dom-jsdom');
//const dom = require('./dom-cheerio');

module.exports = {
	fromText: dom.fromText,
	fromFile: fileName => util.promisify(fs.readFile)(fileName).then(dom.fromText)
};