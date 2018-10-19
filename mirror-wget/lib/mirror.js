/*
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


JSDOM.fromFile("mirror/www.lernhilfe-hafis.de/index.html")
	.then(dom => {
		let $ = require("jquery")(dom.window);
		console.log($("html").html());
	});

*/
const glob = require('glob');
const cheerio = require('cheerio');

const entries = glob.sync('**/*.htm?(l).orig', { cwd: "mirror" });
return;

console.log(entries);



const $ = cheerio.load(
	  '<!DOCTYPE html><html lang="de"     ><head>'
	+ '\n' + '    <link rel="dns-prefetch" href="../123.mod.mywebsite-editor.com/"/>'
	+ '\n' + '            <meta name="robots" content="index,follow"/>'
	+ '\n' + '<script type="text/javascript" src="../cdn.eu.mywebsite-editor.com/app/cdn/min/group/pfcsupport.js@1537880851685"></script>'
	+ '\n' + '<script type="text/javascript" src="../cdn.eu.mywebsite-editor.com/app/cdn/min/group/pfcsupport.js@1537880851685"></script>'
	+ '\n' + '</head>'
	+ '\n' + '<body>'
	+ '\n' + '  <div id="matrix_257567" class="sortable-matrix" data-matrixId="257567">'
	+ '\n' + '    <b>something in bold</b>'
	+ '\n' + '  </div>'
	+ '\n' + '  <div> </div>'
	+ '\n' + '  <div></div>'
	+ '\n' + '  <b></b>'
	+ '\n' + '  <font></font>'
	+ '\n' + '</body>'
	, {
		lowerCaseTags: false,
		lowerCaseAttributeNames: false,
		recognizeSelfClosing: true,
		withDomLvl1: true,
		normalizeWhitespace: false,
		xmlMode: true,
		decodeEntities: false
	}
);
$("script[src]").text("");
$("*").filter((i,e) => (e.type == "tag") && (e.name != "meta") && (e.name != "link") && !e.children.length).text("");
//console.log($("meta"))
$("[href]").attr("href", null);

console.log($.html());


