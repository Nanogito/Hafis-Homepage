echo "git-removing files with timestamps in the name:"
git rm mirror/123.sb.mywebsite-editor.com/app/*

rm -r -f mirror/*

echo "wgetting:"
cat wget.urls
echo "..."
date "+%F %H:%M:%S" >wget-start.txt
time wget --config=.wgetrc -P mirror/ --input-file=wget.urls
date "+%H:%M:%S (UTC%z)" >wget-end.txt

# remove "crossorigin" attributes from <script> so they work locally (file://)
echo "done. Removing \"crossorigin\" attributes from:"
egrep -r --files-with-matches 'crossorigin="[^"]+"' mirror/ | egrep '.*\.html$'
echo "..."
egrep -r --files-with-matches 'crossorigin="[^"]+"' mirror/ | egrep '.*\.html$' | awk '{print "sed -i -b -E", "\"s/ *crossorigin=\\\"[^\\\"]+\\\"//g\"", $0 | "/bin/sh"}'

echo "git-adding files with timestamps in the name:"
git add mirror/123.sb.mywebsite-editor.com/app/*


echo "creating index.html for convenience:"
cp index-part1.html index.html
cat wget-start.txt >>index.html
echo " ... " >>index.html
cat wget-end.txt >>index.html
cat index-part2.html >>index.html
egrep '^[ \t]*[^#][ \t]*[^ \t]+' wget.urls | sed -E "s/^(https?:\/\/)(.+[^\/]+)\/?$/\t\<li\>\<a href=\"mirror\/\2\/index.html\"\>\1\2\<\/a\>/" >>index.html
cat index-part3.html >>index.html
cat index.html | sed -E "s/^.*$/\t\0/"

rm wget-start.txt wget-end.txt

echo ""
read -p "All done. Press enter to continue. "
