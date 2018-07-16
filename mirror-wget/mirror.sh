#echo "git-removing files with timestamps in the name:"
#git rm mirror/123.sb.mywebsite-editor.com/app/*

rm -r -f mirror/*
mkdir --parents mirror/123.sb.mywebsite-editor.com/app/

echo "wgetting:"
cat wget.urls
echo "..."
date "+%F %H:%M:%S" >~wget-start.txt
wget -o wget.log -P mirror/ --force-directories https://123.sb.mywebsite-editor.com/robots.txt
wget -a wget.log -O mirror/123.sb.mywebsite-editor.com/app/logstate-js.php@site=690615453.js https://123.sb.mywebsite-editor.com/app/logstate-js.php?site=690615453
wget -a wget.log -O mirror/123.sb.mywebsite-editor.com/app/logstate2-css.php@site=690615453.css https://123.sb.mywebsite-editor.com/app/logstate2-css.php?site=690615453
time wget -a wget.log -P mirror/ --config=.wgetrc --input-file=wget.urls
date "+%H:%M:%S (UTC%z)" >~wget-end.txt
echo "done."

# fix links to stupid 123.sb|mod.mywebsite-editor.com (we'll omit the timestamps in the query string)
echo "fixing links to stupid 123.sb|mod.mywebsite-editor.com:"
egrep -r --files-with-matches '123\.(sb|mod)\.mywebsite-editor\.com' mirror/ | egrep '.*\.html$' >~fix-stupid.lst
cat ~fix-stupid.lst
echo "..."

# calculate relative paths to mirror/, store in ~fix-stupid.dat
awk '{ p = $0; sub(/[^\/]*$/, "", p); "realpath --relative-to=" p " mirror" | getline rp; sub(/\//,"\\/", rp); print rp "\t" $0 }' ~fix-stupid.lst >~fix-stupid.dat

# drop protocol, make relative paths
awk '{ p = "(href|src)[:space:]*=[:space:]*\\\"(https?:)?\\/(\\/123\\.(sb|mod)\\.mywebsite-editor\\.com[^\\\"]*)\\\""; r = sprintf("\\1=\\\"%s\\3\\\"", $1); c = sprintf("sed -i -E \"s/%s/%s/g\" %s", p, r, $2); c | getline}' ~fix-stupid.dat

# fix (js|css)\.php?site=...
awk '{ p = "((href|src)=\\\"(\\.\\.\\/)*123\\.(sb|mod)[^\\\"]*-(js|css)\\.php)\\?(site=[0-9]+)([^\\\"]*)\\\""; r = "\\1@\\6\\.\\5\\\""; c = sprintf("sed -i -E \"s/%s/%s/g\" %s", p, r, $2); c | getline}' ~fix-stupid.dat


# remove "crossorigin" attributes from <script> so they work locally (file://)
echo "Removing \"crossorigin\" attributes from:"
egrep -r --files-with-matches 'crossorigin="[^"]+"' mirror/ | egrep '.*\.html$' >~fix-crossorigin.lst
cat ~fix-crossorigin.lst
echo "..."
awk '{print "sed -i -b -E", "\"s/ *crossorigin=\\\"[^\\\"]+\\\"//g\"", $0 | "/bin/sh"}' ~fix-crossorigin.lst

#echo "git-adding files with timestamps in the name:"
#git add mirror/123.sb.mywebsite-editor.com/app/*


echo "creating index.html for convenience:"
cp index-part1.html index.html

#cat ~wget-start.txt >>index.html
#echo " ... " >>index.html
#cat ~wget-end.txt >>index.html
echo "" | awk '{ "cat ~wget-start.txt" | getline s; "cat ~wget-end.txt" | getline e; printf "%s ... %s", s, e }' >>index.html

cat index-part2.html >>index.html
egrep '^[ \t]*[^#][ \t]*[^ \t]+' wget.urls | sed -E "s/^(https?:\/\/)(.+[^\/]+)\/?$/\t\<li\>\<a href=\"mirror\/\2\/index.html\"\>\1\2\<\/a\>/" >>index.html
cat index-part3.html >>index.html
cat index.html | sed -E "s/^.*$/\t\0/"

echo "cleaning up..."
rm ~wget-start.txt ~wget-end.txt ~fix-stupid.lst ~fix-stupid.dat ~fix-crossorigin.lst

echo ""
read -p "All done. Press enter to continue. "
