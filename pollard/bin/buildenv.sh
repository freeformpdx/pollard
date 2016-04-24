while read p; do
	export $p
done <../development.env

node bin/buildenv.js
