const cheerio = require('cheerio');

/*
let test = '<ul>zero</ul><ul id="1">one</ul><ul id="2">two</ul><ul id="3">three</ul>';
let $ = load(test);
let first = $('ul[id]');

console.log(first.next().length);
*/

const test= '<b><a href="//example.com/c">Click here</a>'
	+ '<br />'
	+ '<a href="//other.com/d">Click here</a></b>';
const $= cheerio.load(test);
for (let el= $('a[href]'); el.length; el= el.next()) {
	let href= el.attr('href');
	console.log(el.length, el[0].tagName, el.html(), href);
	if (href.startsWith('//')) {
		console.log(`fixing ${href}`);
		el.attr('href', 'https:'+href);
	} else {
		console.log(`this looks ok: ${href}`);
	}
}
console.log($('body').html());
