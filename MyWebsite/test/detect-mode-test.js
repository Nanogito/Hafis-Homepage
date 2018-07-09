define(["qunit", "detect-mode"], (QUnit, mode) => {
	'use strict';
	const { test } = QUnit;
	QUnit.module("detect-mode");
		
	test("isDebug", assert => {
		const act = mode.isDebug();
		assert.equal(typeof act, "boolean", "should return either true or false");
	});
	
	test("isEditor", assert => {
		const act = mode.isEditor();
		assert.equal(typeof act, "boolean", "should return either true or false");
	});

});