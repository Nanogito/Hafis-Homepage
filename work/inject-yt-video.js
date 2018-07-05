if (window.jQuery) { window.jQuery_1and1 = window.jQuery; }
jQuery(document).ready(() => {
	let alignContainer = jQuery("div#content_area div.module-type-textWithImage")
	   .find(".imagewrapper[href*=youtube][href*=YEmkxX56l-Y]")
	   .parent();
	let imgWrapper =alignContainer.find(".imagewrapper");
	//console.log("imgWrapper", imgWrapper);
	let a = imgWrapper.replaceWith(jQuery("<iframe>", {
		 width: 560,
		 height: 315,
		 src: "https://www.youtube-nocookie.com/embed/YEmkxX56l-Y?rel=0",
		 frameborder: 0,
		 allow: "autoplay; encrypted-media",
		 allowfullscreen: ""
	}));
	//console.log("a", a);
	let iframe = alignContainer.find("iframe");
	//console.log("iframe", iframe);
});