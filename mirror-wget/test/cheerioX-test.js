let expect = require("expect.js"),
	cheerio = require("cheerio");
const {
	empty,
	fromFragmentHead,
	fromFragmentBody
} = require("../lib/cheerioX");

let options =  {
	lowerCaseTags: false,
	lowerCaseAttributeNames: false,
	//recognizeSelfClosing: true,
	withDomLvl1: true,
	normalizeWhitespace: false,
	xmlMode: true,
	//xml: true,
	decodeEntities: false
};

/* Must use xmlMode because otherwise
 * - attribute names get lowercased, even if lowerCaseAttributeNames == false
 * - there will be *no* self-closing tags in the serialization at all
 */


const emptyDocHtml = '<!DOCTYPE html><html><head></head><body></body></html>';
function empty$() {
	let $ = cheerio.load(emptyDocHtml, options);
	$('head,body').text('');
	return $;
}

describe('cheerioX', function () {
	function expect_to_be_empty($) {
		expect($('html')).to.have.length(1);
		expect($('html').children()).to.have.length(2);
		expect($('html > head')).to.have.length(1);
		expect($('html > head').children()).to.have.length(0);
		expect($('html > body')).to.have.length(1);
		expect($('html > body').children()).to.have.length(0);
	}
	describe('.empty()', function () {
		it('should return a NEW empty doc on each call', function () {
			let $1 = empty();
			let $2 = empty();
			expect_to_be_empty($1);
			expect_to_be_empty($2);
			expect($1).not.to.equal($2);
		});
	}) ;
	describe('fromFragmentHead', function () {
		it('should return an empty doc for ""', function () {
			let $ = fromFragmentHead('');
			expect_to_be_empty($);
		});
		it('should insert given fragment under <head>', function () {
			let $ = fromFragmentHead('<link rel="dns-prefetch" href="//some.host.com"/>');
			expect($('html > head > *')).to.have.length(1);
			let elem = $('html > head > *')[0];
			expect(elem.type).to.be('tag');
			expect(elem.name).to.be('link');
			expect(elem.children).to.have.length(0);
		});
	}) ;
	it('should render empty <head> and <body> as NON-self-closing tags', function () {
		let $ = empty();
		expect($('html').html()).to.equal('<head></head><body></body>');
	});
	it('should render <link .../> as self-closing tag', function () {
		let s = '<link rel="dns-prefetch" href="//some.host.com/"/>';
		let $ = empty();
		expect($('head').append($(s)).html()).to.equal(s);
	});
	it('should render <meta .../> as self-closing tag', function () {
		let s = '<meta name="robots" content="index,follow"/>';
		let $ = empty();
		expect($('head').append($(s)).html()).to.equal(s);
	});
	it('should render <div></div> as is', function () {
		let s = '<div></div>';
		let $ = empty();
		expect($('body').append($(s)).html()).to.equal(s);
	});
	it('should render <div/> as <div></div>', function () {
		let s = '<div/>';
		let $ = empty();
		expect($('body').append($(s)).html()).to.equal('<div></div>');
	});
	it('should render <div /> as <div></div>', function () {
		let s = '<div />';
		let $ = empty();
		expect($('body').append($(s)).html()).to.equal('<div></div>');
	});
	it('should render <span></span> as is', function () {
		let s = '<span></span>';
		let $ = empty();
		expect($('body').append($(s)).html()).to.equal(s);
	});
	it('should render <script src="..."></script> as is', function () {
		let s = '<script type="text/javascript" src="foo.js"></script>';
		let $ = empty();
		expect($('body').append($(s)).html()).to.equal(s);
	});
	it('should render whitespace as is', function () {
		let s = '<div>\n    <b>bold</b>\n</div>';
		let $ = empty();
		expect($('body').append($(s)).html()).to.equal(s);
	});
	it('should render camel-cased attributes <div></div> as is', function () {
		let s = '<div data-matrixId="foo">bar</div>';
		let $ = empty();
		$('body').append($(s));
		$('[data-matrixid]').each(function (i, e) {
			let $e = $(e),
				v = $e.attr('data-matrixid');
			$e.removeAttr('data-matrixid');
			$e.attr('data-matrixId', v);
		});
		expect($('body').html()).to.equal(s);
	});
});

describe("cheerio", function () {
	it('#1235', function () {
		const $ = empty();
		const s = '<div data-message="msg"></div><br><span></span><div>still here</div>';
		const x = '<div data-message="msg"></div><br/><span></span><div>still here</div>';
		expect($('body').append($(s)).html()).to.equal(x);
	});
});
/*

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
	, options
);
$("script[src]").text("");
$("*").filter((i,e) => (e.type == "tag") && (e.name != "meta") && (e.name != "link") && !e.children.length).text("");
//console.log($("meta"))
$("[href]").attr("href", null);

console.log($.html());


*/