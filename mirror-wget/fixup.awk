#!/bin/awk -E


# sed -E -i~ 's/[[:space:]]+crossorigin[[:space:]]*=[[:space:]]*"[^"]*"//g;' mirror/www.lernhilfe-hafis.de/index.html

#sed -E 's/[[:space:]]*"[^"]*"//g;s/(href|src)[[:space:]]*=[[:space:]]*"((https?:)?\/\/)([^\/"]+)([^?"]*)(\?([^"]*))?"/\1="..\/\4\5\6"/g' mirror/www.lernhilfe-hafis.de/index.html > mirror/www.lernhilfe-hafis.de/index.html~


#sed -E 's/(href|src)="(https?:)?\/\/(123[^"]*)"/\1="..\/\3"/g;s/(href|src)="\.\.\/(123[^?"]*)\?([^"]+)"/\1="..\/\2@\3"/g' mirror/www.lernhilfe-hafis.de/index.html > mirror/www.lernhilfe-hafis.de/index.html~

#sed -E 's/(href|src)="\.\.\/(123[^?"]*)\?([^"]+)"/\1="..\/\2@\3"/g' mirror/www.lernhilfe-hafis.de/index.html > mirror/www.lernhilfe-hafis.de/index.html~


# keep only the a=.. urlParam:
#echo "blah?c=1&b=2&a=3" | sed -E 's/([^?]*)\?((a=[0-9])(&[a-z]=[0-9])*|[a-z]=[0-9](&[a-z]=[0-9])*&(a=[0-9])(&[a-z]=[0-9])*)/\1@\3\6/g'
#blah@a=3



function mkAttrRx(rx_attr, rx_value) {
	if (length(rx_value) == 0) {
		rx_value = "[^\"]*"
	}
	return "[[:space:]]*([[:space:]]" rx_attr ")[[:space:]]*=[[:space:]]*\"(" rx_value ")\""
}

function sedCmdDeleteAttr(rx_attr, rx_value) {
	return sprintf("s/%s//g;", mkAttrRx(rx_attr, rx_value))
}

function dirname(f) {
	return gensub(/^(.*)\/([^\/]+)$/, "\\1", "g", f)
}
function relPath(fromFile, toDir,      out) {
	"realpath --relative-to=" dirname(fromFile) " " toDir | getline out
	return out
}
function outputFrom(cmd,         origRS, out) {
	origRS = RS
	RS = "" # get all lines of output from cmd into variable 'out'
	cmd | getline out
	RS = origRS
	return out
}
function charCount(ch, text,     tmp) {
	tmp = gensub("[^" ch "]", "", "g", text)
	return length(tmp)
}

BEGIN {
	bkpDir = "mirror"
	rx_host = ""
	print "---"
}
/^[[:space:]]*([^[:space:]#]+)[[:space:]]*$/ {
	if (length(rx_host) == 0) {
		rx_host = $1
	} else {
		rx_host = rx_host "|" $1
	}
	print rx_host
}
END {
	parens = charCount("(", rx_host)
	print parens, rx_host
	rx_host = "(" rx_host ")"
	rx_attrPre = "(href|src)[[:space:]]*=[[:space:]]*"
	print "---"
	#rx_link = rx_attrPre "\"(https?:)?/(/" rx_host "[^\"]*)\""
	rx_link = mkAttrRx("href|src", "((\\.{2}\\/)+|(https?:)?\\/{2})" rx_host "[^\"]*")
	grepRx = rx_link "|" mkAttrRx("crossorigin")
	grepcmd = "egrep -r --files-with-matches '" grepRx "' " bkpDir "/ | egrep '.*\\.html?$'"
	print grepcmd
	grepout = outputFrom(grepcmd)
	split(grepout, files, "\n")
	for (i in files) {
		file = files[i]
		print relPath(file, bkpDir), file
		print outputFrom("egrep --initial-tab --line-number --color=always '" grepRx "' " file)
		print "sed -E '" sedCmdDeleteAttr("crossorigin") "' " file " >" file "~"
		print ""
	}
	print "---"
	print mkAttrRx("href|src")
	print "---"
	foo["x"] = "bar"
	print foo["x"]
}
#BEGINFILE {
#}
#match($0, rx_123link, m) {
#	print "\t" $0
#	for (i in m) {
#		print "\t\t" i ": " m[i]
#	}
#}
