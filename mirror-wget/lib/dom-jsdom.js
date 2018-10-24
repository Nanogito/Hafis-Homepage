const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const jquery = require('jquery');

let fromText = exports.fromText = function (html) {
	let dom = new JSDOM(html, { includeNodeLocations: false });
	dom.$ = jquery(dom.window);
	dom.render = function () {
		let $ = this.window.$;
		return this.serialize();
	};
	return dom;
};

