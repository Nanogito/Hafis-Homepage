const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const jquery = require('jquery');

//console.log(jsdom);


/*
JSDOM.fromFile("mirror/www.lernhilfe-hafis.de/index.html")
	.then(dom => {
		//let $ = jquery(dom.window);
		//console.log($("html").html());
		console.log(dom.serialize());
	});
*/
/*
const glob = require('glob');

const entries = glob.sync('**' + '/*.htm?(l).orig', { cwd: "mirror" });
return;

console.log(entries);



*/