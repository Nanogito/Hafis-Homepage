var expect = require("expect.js"),
	mirror = require("../");

describe('mirror', function() {

	it('should get the version', function() {
		expect(mirror.version).to.match(/\d+\.\d+\.\d+/);
	});

})