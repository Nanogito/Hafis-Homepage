define(["qunit", "urlParams"], (QUnit, urlParams) => {
	'use strict';
	const { test } = QUnit;
	QUnit.module("urlParams");
		
	test("with no arg", assert => {
		const act = urlParams();
		const exp = urlParams(window.location);
		assert.propEqual(act, exp,
			"gives urlParams of window.location");
	});
	test("no query string in URL yields empty object", assert => {
		const wl = window.location;
		const exp = {};
		let url;
		
		url = new URL(wl.origin + wl.pathname);
		assert.propEqual(urlParams(url), exp, 
			"without hash #: " + url);
		url = new URL(wl.origin + wl.pathname + "#foo");
		assert.propEqual(urlParams(url), exp, 
			"with a hash #: " + url);
	});

});