'use strict';

const cheerio = require('cheerio');

const options =  {
	lowerCaseTags: false,
	lowerCaseAttributeNames: false,
	//recognizeSelfClosing: true,
	withDomLvl1: true,
	normalizeWhitespace: false,
	xmlMode: false,
	//xml: true,
	decodeEntities: true
};

/* Must use xmlMode because otherwise
 * - attribute names get lowercased, even if lowerCaseAttributeNames == false
 * - there will be *no* self-closing tags in the serialization at all
*/

// https://www.w3.org/TR/html5/syntax.html#void-elements
const voidElems = 'area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr';

const emptyDocHtml = '<!DOCTYPE html><html><head></head><body></body></html>';

let fromText = exports.fromText = function (htmlStr) {
	if (htmlStr == '') {
		htmlStr = emptyDocHtml;
	}
	let $ = cheerio.load(htmlStr, options);
	if (!$.prototype._html) {
		$.prototype._html = $.prototype.html;
		$.prototype.html = function () {
			if (arguments.length)
				return this._html(arguments[0]);
			this.find('*').not(voidElems).filter((i, e) => !e.children || !e.children.length).text('');
			let orig_xmlMode = this.options.xmlMode;
			//this.options.xmlMode = true;
			let result = this._html();
			this.options.xmlMode = orig_xmlMode;
			return result;
		};
	}
	return {
		window: { "$": $ },
		render: function () {
			return this.window.$.root().html();
		}
	};
};

