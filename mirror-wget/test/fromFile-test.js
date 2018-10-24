const expect = require("expect.js");

const dom = require("../lib/dom");

const { fromFile } = dom;
const testFile = __dirname + '/fixtures/test.html';

describe('.fromFile', function () {
	it('should read the file', function () {
		let p = fromFile(testFile);
		expect(p).to.be.a(Promise);
		return p.then(d => {
			let $ = d.window.$;
			expect($('.sortable-matrix')).to.have.length(1);
		});
	});
});