const expect = require("expect.js");

const dom = require("../lib/dom");

const { fromText } = dom;

const snip1 = '<!DOCTYPE html><html><head>',
	  snip2 = '</head><body>',
	  snip3 = '</body></html>';

function headFrag(s) {
	return fromText(snip1 + s + snip2 + snip3);
};
function bodyFrag(s) {
	return fromText(snip1 + snip2 + s + snip3);
};

function expect_to_be_empty(dom) {
	let $ = dom.window.$;
	expect($('html')).to.have.length(1);
	expect($('html').children()).to.have.length(2);
	expect($('html > head')).to.have.length(1);
	expect($('html > head').children()).to.have.length(0);
	expect($('html > body')).to.have.length(1);
	expect($('html > body').children()).to.have.length(0);
}

function expect_to_render(f, s, x) {
	const len1 = snip1.length,
		  len2 = snip2.length,
		  len3 = snip3.length,
		  lenX = x.length;
	if (f === headFrag) {
		let a = headFrag(s).render();
		expect(a.substr(0, len1)).to.be(snip1);
		expect(a.substr(-len2-len3)).to.be(snip2 + snip3);
		expect(a.substr(len1).substr(0, lenX)).to.be(x);
	} else if (f === bodyFrag) {
		let a = bodyFrag(s).render();
		expect(a.substr(0, len1+len2)).to.be(snip1+snip2);
		expect(a.substr(-len3)).to.be(snip3);
		expect(a.substr(len1+len2).substr(0, lenX)).to.be(x);
	}
}

describe('test-helper', function () {
	describe('headFrag', function () {
		it('should return an empty doc for ""', function () {
			expect_to_be_empty(headFrag(''));
		});
		it('should insert given fragment under <head>', function () {
			let d = headFrag('<link rel="dns-prefetch" href="//some.host.com"/>');
			let $ = d.window.$;
			expect($('html > head > *')).to.have.length(1);
			let elem = $('html > head > *')[0];
			expect(elem.tagName).to.match(/link/i);
			expect(elem.childNodes).to.have.length(0);
		});
	});
	describe('bodyFrag', function () {
		it('should return an empty doc for ""', function () {
			expect_to_be_empty(bodyFrag(''));
		});
		it('should insert given fragment under <body>', function () {
			let d = bodyFrag('<a href="//some.host.com"/>Click</a>');
			let $ = d.window.$;
			expect($('html > body > *')).to.have.length(1);
			let elem = $('html > body > *')[0];
			expect(elem.tagName).to.match(/a/i);
			expect(elem.childNodes).to.have.length(1);
		});
	});
});

describe('dom', function () {
	describe('.fromText("")', function () {
		it('should return a NEW empty doc on each call', function () {
			let d1 = fromText('');
			let d2 = fromText('');
			expect_to_be_empty(d1);
			expect_to_be_empty(d2);
			expect(d1).not.to.equal(d2);
		});
	}) ;
	it('should render empty <head> and <body> as NON-self-closing tags', function () {
		let $ = fromText('').window.$;
		expect($('html').html()).to.equal('<head></head><body></body>');
	});
	it('should leave encoded entities in attr values as is', function () {
		let s = '<title id="1&amp;1 MyWebsite"></title>';
		expect_to_render(headFrag, s, s);
	});
	it.skip('should leave encoded entities in text nodes as is', function () {
		let s = '<title>M&uuml;&gt;nchen</title>';
		expect_to_render(headFrag, s, s);
	});
	it('should render <br> as is', function () {
		let s = '<br>foo';
		expect_to_render(bodyFrag, s, s);
	});
	it('should render <br/> as <br>', function () {
		let s = '<br/>foo';
		expect_to_render(bodyFrag, s, '<br>foo');
	});
	it('should render <br /> as <br>', function () {
		let s = '<br />foo';
		expect_to_render(bodyFrag, s, '<br>foo');
	});
	it('should render <div></div> as is', function () {
		let s = '<div></div>';
		expect_to_render(bodyFrag, s, s);
	});
	it('should render <div/> as <div></div>', function () {
		let s = '<div/>';
		expect_to_render(bodyFrag, s, '<div></div>');
	});
	it('should render <div /> as <div></div>', function () {
		let s = '<div />';
		expect_to_render(bodyFrag, s, '<div></div>');
	});
	it('should render <span></span> as is', function () {
		let s = '<span></span>';
		expect_to_render(bodyFrag, s, s);
	});
	it('should render <script src="..."></script> as is', function () {
		let s = '<script type="text/javascript" src="foo.js"></script>';
		expect_to_render(headFrag, s, s);
	});
	it('should render whitespace as is', function () {
		let s = '<div>\n    <b>bold</b>\n</div>';
		expect_to_render(bodyFrag, s, s);
	});
	it('should not mess up the structure on void tag', function () {
		const s = '<div data-message="msg"></div><br><span></span><div>still here</div>';
		const x = '<div data-message="msg"></div><br><span></span><div>still here</div>';
		expect_to_render(bodyFrag, s, x);
	});
	describe.skip('self-closing tag', function () {
		it('<link .../> should render as self-closing tag', function () {
			let s = '<link rel="dns-prefetch" href="//some.host.com"/>';
			expect_to_render(headFrag, s, s);
		});
		it('<meta .../> should render as self-closing tag', function () {
			let s = '<meta name="robots" content="index,follow"/>';
			expect_to_render(headFrag, s, s);
		});
	});
	it.skip('should render camel-cased attributes as is', function () {
		let s = '<div data-matrixId="foo">bar</div>';
		expect_to_render(bodyFrag, s, s);
	});
	
});


/*
describe("cheerio", function () {
	it("should be nice", function () {
		let d = bodyFrag('<div id="4711" data-matrixId="foo">bar<br data-blahId="7"/>qumbl</div>');
		let $ = d.window.$;
		expect($.prototype.html).to.be.a('function');
		$('[data-blahId]').each(function () {
			let $e = $(this);
			let v = $e.attr('data-blahId');
			$e.removeAttr('data-blahId');
			$e.attr('data-blahId', v);
		});
		//$('body').append($('<br data-blahId="7"/>'));
		//expect($('body').html()).to.be('asdf');
		expect(d.nodeLocation($('br')[0])).to.be("asdf");
		let as = $('div').map((i,e) => {
			return d.nodeLocation(e).attrs;
			let as = e.attributes;
			let out = [];
			for (let i = 0; i < as.length; i++) {
				out.push({ name: as[i].name, value: as[i].value });
			}
			return out;
		}).toArray();
		expect(as).to.be('');
	});
});


	, options
);
$("script[src]").text("");
$("*").filter((i,e) => (e.type == "tag") && (e.name != "meta") && (e.name != "link") && !e.children.length).text("");
//console.log($("meta"))
$("[href]").attr("href", null);

console.log($.html());


*/