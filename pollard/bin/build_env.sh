while read p; do
	export $p
done <../$1.env

node bin/build_env.js
