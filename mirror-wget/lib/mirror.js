const glob = require('glob');
const fs = require('fs');
const util = require('util');
const dom  = require('./dom');

let foo = exports.foo = function () {
const entries = glob.sync('mirror/**' + '/*.htm?(l).orig');	//, { cwd: "mirror" });
	entries
		.filter( path => fs.statSync(path).size > 0)
		.forEach( (path, idx) => {
		dom.fromFile(path)
			.catch(err => { 
				console.log("Error: ", err);
				throw err;
			})
			.then(d => {
		console.log(idx, path);
				let $ = d.window.$;
				//$("script[crossorigin]").attr("crossorigin", null);
				//$("html[lang]").attr("lang", null);
				path = path.substr(0, path.length - 5);
				return util.promisify(fs.writeFile)(path, d.render());
				/*
				return new Promise((resolve, reject) => {
					fs.writeFile(path, d.render(), err => err ? reject(err) : resolve());
				});
				*/
			});
	});
};

foo();
