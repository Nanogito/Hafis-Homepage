$("script[crossorigin]").attr("crossorigin", null)

$("[src],[href]")
	.map((i, e) => ({ elem: e, url: new URL(e.src || e.href)}))
	.filter((i, e) => /123\.(sb|mod)\.mywebsite-editor\.com/.test(e.url.host))
	.map((i, e) => {
		let attr = e.elem.src ? "src" : "href";
		let sp = [...new URLSearchParams(e.url.search.substr(1))]
			.map(p => p.join("="))
			.filter(p => !/t=\d+$/.test(p))
			.join("&");
		if (sp) {
			sp = "@" + sp;
			let m = /-([^.]+)\.php$/.exec(e.url.pathname);
			sp += m ? "." + m[1] : "";
		}
		e.url = "../" + e.url.host + e.url.pathname + sp;
		e.elem[attr] = e.url;
		return e.elem;
	})
