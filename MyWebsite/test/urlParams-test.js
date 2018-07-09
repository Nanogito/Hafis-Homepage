define(["qunit", "urlParams"], (QUnit, urlParams) => {
	'use strict';
	const { test } = QUnit;
	QUnit.module("urlParams");
	
	function makeURL(url, queryAndHash) {
		let prefix;
		if (typeof url === "string") {
			queryAndHash = url;
			prefix = "http://foo.bar.com/";
		} else {
			if (queryAndHash === void(0)) {
				queryAndHash = "";
			}
			prefix = url.origin + url.pathname;
		}
		return new URL(prefix + queryAndHash);
	}
		
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
		
		url = makeURL(wl);
		assert.propEqual(urlParams(url), exp, 
			"without hash #: " + url);
		
		url = makeURL("");
		assert.propEqual(urlParams(url), exp, 
			"without hash #: " + url);
		
		url = makeURL("#foo");
		assert.propEqual(urlParams(url), exp, 
			"with a hash #: " + url);
	});
	test("key without value yields undefined value", assert => {
		let url;
		
		url = makeURL("?debug");
		assert.propEqual(urlParams(url), { debug: void(0) }, 
			"one param: " + url);
		
		url = makeURL("?undefined");
		assert.propEqual(urlParams(url), { "undefined": void(0) }, 
			"key 'undefined': " + url);
		
		url = makeURL("?debug&foo");
		assert.propEqual(urlParams(url), { debug: void(0), foo: void(0) }, 
			"two params: " + url);
	});
	test("key 'undefined' with a value", assert => {
		let url;
		
		url = makeURL("?undefined=foo");
		assert.propEqual(urlParams(url), { "undefined": "foo" }, url);
		
		url = makeURL("?undefined=undefined");
		assert.propEqual(urlParams(url), { "undefined": "undefined" }, url);
	});
	test("no key but a value", assert => {
		let url;
		
		url = makeURL("?=foo");
		assert.propEqual(urlParams(url), { "": "foo" }, url);
	});
	test("key appearing more than once", assert => {
		let url;
		
		url = makeURL("?=foo&=bar");
		assert.propEqual(urlParams(url), { "": "bar" }, 
			"yields the value from last appearance: " + url);
		
		url = makeURL("?x=foo&x=bar");
		assert.propEqual(urlParams(url), { x: "bar" }, 
			url);
	});
	test("number as value", assert => {
		let url;
		
		url = makeURL("?blah=42");
		assert.propEqual(urlParams(url), { blah: 42 }, 
			"should yield number, not string" + url);
	});

});