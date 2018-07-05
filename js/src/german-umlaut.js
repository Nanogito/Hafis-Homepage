
(function () {
	var $ = window.$ || window.jQuery || window.jQuery_1and1;
	
	function parseQuery() {
		try { // don't crash on old IE, but rather return empty object
			return (window.location.search || "?")
				.substring(1)
				.split("&")
				.reduce(function (acc, s) {
					var pieces = s.split("=");
					var k = pieces[0];
					var v = pieces[1];
					var i = parseInt(v);
					if (isFinite(i)) {
						v = i;
					}
					acc[k] = v;
					return acc;
				}, {});
		} catch (e) {
			return {};
		}
	}
	var qParams = parseQuery();
	var isDebugMode = Object.prototype.hasOwnProperty.call(qParams, "debug")
		&& ((qParams.debug === void(0)) || !!qParams.debug);
	var out = {
		isDebugMode: isDebugMode,
		parseQuery: parseQuery,
		params: qParams
	};
	out.log = function () {
		return out.isDebugMode
			? console.log.apply(console, $.makeArray(arguments))
			: void(0);
	};

	out.log("$:", $);

	return out;
}());
