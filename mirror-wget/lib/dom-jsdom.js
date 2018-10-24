const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const jquery = require('jquery');

const options = {
	includeNodeLocations: false
};

let fromText = exports.fromText = function (html) {
	let dom = new JSDOM(html, options);
	dom.$ = jquery(dom.window);
	dom.render = function () {
		let $ = this.window.$;
		return this.serialize();
	};
	return dom;
};

let fromFile = exports.fromFile = function (fileName) {
	return JSDOM.fromFile(fileName, options)
		.then(dom => {
			dom.$ = jquery(dom.window);
			dom.render = function () {
				let $ = this.window.$;
				return this.serialize();
			};
			return dom;
		});
};

