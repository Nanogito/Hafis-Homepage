rm -r -f mirror/*
echo "wgetting..."
wget --config=.wgetrc --input-file=wget.urls --directory-prefix=mirror
echo "done. Removing \"crossorigin\" attributes from:"
egrep -r --files-with-matches 'crossorigin="[^"]+"' mirror/ | egrep '.*\.html$'
echo "..."
egrep -r --files-with-matches 'crossorigin="[^"]+"' mirror/ | egrep '.*\.html$' | awk '{print "sed -i -b -E", "\"s/ *crossorigin=\\\"[^\\\"]+\\\"//g\"", $0 | "/bin/sh"}'
echo "done."