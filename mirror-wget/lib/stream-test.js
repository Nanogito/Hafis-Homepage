const RewritingStream = require('parse5-html-rewriting-stream');
const fs = require('fs');

const file = fs.createReadStream('test/fixtures/test.html');
const rewriter = new RewritingStream();

rewriter.on('startTag', (startTag, raw) => {
	console.log('"' + raw.replace('\\', '\\\\').replace('"', '\\"') + '"');
	console.log(startTag.tagName, startTag.selfClosing, startTag.attrs);
	rewriter.emitStartTag(startTag);
});

rewriter.on('endTag', (endTag, raw) => {

	rewriter.emitEndTag(endTag);
});

/*
// Wrap all text nodes with <i> tag
rewriter.on('text', (_, raw) => {
	// Use raw representation of text without HTML entities decoding
	rewriter.emitRaw(`<i>${raw}</i>`);
});
*/



let s = '';
rewriter.on('data', data => s += data);
rewriter.on('end', () => {
	console.log('--------------------');
	console.log(s);
	
});

file.setEncoding('utf8');
file.pipe(rewriter);

/*
https.get('https://www.lernhilfe-hafis.de', res => {
   // Assumes response is UTF-8.
   res.setEncoding('utf8');
   // RewritingStream is the Transform stream, which means you can pipe
   // through it.
   res.pipe(rewriter).pipe(file);
});
*/