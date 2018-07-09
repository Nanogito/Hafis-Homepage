// Note: "jquery" in all-lowercase!
define(["jquery", "urlParams"], function ($, urlParams) {

	var params = urlParams();

	return {
		isDebug: function () {
			return Object.prototype.hasOwnProperty.call(params, "debug")
				&& ((params.debug === void(0)) || !!params.debug);
		},
		isEditor: function () {
			return !!$("#diyToolbar").length;
		}
	};
});