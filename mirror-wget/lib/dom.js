const fs = require('fs');

const dom = require('./dom-jsdom');
//const dom = require('./dom-cheerio');

module.exports = {
	fromText: dom.fromText,
	fromFile: function (fileName) {
		return new Promise((resolve, reject) =>
			fs.readFile(fileName, (err, data) =>
				err ?  reject(err) : resolve(dom.fromText(data))
			)
		);
	}
};