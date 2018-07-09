// Note: "jquery" in all-lowercase!
define(["jquery"], function ($) {
	
	function urlParams(url) {
		url = url || window.location;
		try { // don't crash on old IE, but rather return empty object
			return (url.search || "?")
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
	
	var params = urlParams();

	return {
		isDebug: function () {
			return Object.prototype.hasOwnProperty.call(params, "debug")
				&& ((params.debug === void(0)) || !!params.debug);
		},
		isEditor: function isEditorMode() {
			return !!$("#diyToolbar").length;
		},
		urlParams: params
	};
});