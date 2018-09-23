// Note: "jquery" in all-lowercase!
define([], function ($) {
	
	function urlParams(url) {
		url = url || window.location;
		try { // don't crash on old IE, but rather return empty object
			return (url.search || "?")
				.substring(1)
				.split("&")
				.filter(function (s) { return s != "" })
				.reduce(function (acc, s) {
					var pieces = s.split("=");
					var k = pieces[0];
					var v = pieces[1];
					var i = parseInt(v);
					acc[k] = isFinite(i) ? i : v;
					return acc;
				}, {});
		} catch (e) {
			return {};
		}
	}

	return urlParams;
});