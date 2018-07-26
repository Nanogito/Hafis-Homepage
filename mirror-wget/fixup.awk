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
	return "[[:space:]]*([[:space:]](" rx_attr "))[[:space:]]*=[[:space:]]*\"(" rx_value ")\""
}

function sedCmdDeleteAttr(rx_attr, rx_value) {
	return sprintf("s/%s//g;", mkAttrRx(rx_attr, rx_value))
}

function dirname(f) {
	return gensub(/^(.*)\/([^\/]+)$/, "\\1", "g", f)
}
function relPath(fromFile, toDir,      cmd, out, dn) {
	cmd = "realpath --relative-to=" dirname(fromFile) " " toDir
	cmd | getline out
	close(cmd)        # <<<<<<< DON'T forget this!
	return out
}
function outputFrom(cmd,         target, origRS) {
	origRS = RS
	RS = "^$" # get all lines of output from cmd into variable 'out'
	cmd | getline target
	close(cmd)        # <<<<<<< DON'T forget this!
	RS = origRS
	return target
}
function readfile(file,         target, origRS) {
	origRS = RS
	RS = "^$" # will never match, hence we'll read the whole file at once
	getline target < file
	close(file)        # <<<<<<< DON'T forget this!
	RS = origRS
	return target
}
function charCount(ch, text) {
	return gsub(ch, "", text)
}

function beginFile(fileName, fileNr) {
	print "beginfile " fileNr ": " fileName

}
function endFile(fileName, fileNr, changedLineCount, lineCount) {
	print "endfile " fileNr ": " fileName, "lines:" changedLineCount "/" lineCount
	print ""
}


BEGIN {
	print outputFrom("cat test.html")
	exit

	bkpDir = "mirror"
	if (rx_host == "") {
		rx_host = "[^/]+"
	}
	fileNr = 0
	__lastFile = ""
	__lastLines = 0
	__lastLinesChanged = 0
	print "BEGIN: rx_host=" rx_host
	
	rx_crossorigin = mkAttrRx("crossorigin");
	rx_relativeLink = mkAttrRx("href|src", "(https?:)?//(" rx_host ")([^\"]*)")
}
__lastFile != FILENAME {
	if (__lastFile != "") {
		endFile(__lastFile, fileNr, __lastLinesChanged, __lastLines);
		fileNr++
	}
	beginFile(FILENAME, fileNr);
	__lastFile = FILENAME
	__lastLines = 0
	__lastLinesChanged = 0
}
1 { # must be first rule
	__lastLines++
	__origLine = $0
}
END {
	if (__lastFile != "") {
		endFile(__lastFile, fileNr, __lastLinesChanged, __lastLines);
	}
}

0 && ($0 ~ rx_crossorigin) {
	print FNR ":\t" $0 
	$0 = gensub(rx_crossorigin, "", "g")
	print "\t" $0
}
$0 ~ (rx = rx_relativeLink) {
	print FNR ":\t" $0
	$0 = gensub(rx_relativeLink, "\\1=\"" relPath(FILENAME, bkpDir) "/\\5\\7\"", "g")
	print "\t" $0
	print "\t" rx
}

1 { # must be last rule
	if (__origLine != $0) {
		__lastLinesChanged++
	}
}

xBEGINFILE {
	print "BEGINFILE " fileNr ": " FILENAME
}
xENDFILE {
	print "ENDFILE " fileNr ": FILENAME=" FILENAME, "FNR=" FNR
	print ""
	#FN++
}
0 {	#END {
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
#match($0, rx_123link, m) {
#	print "\t" $0
#	for (i in m) {
#		print "\t\t" i ": " m[i]
#	}
#}
