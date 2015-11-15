while read p; do
	export $p
done <env.list

node bin/buildenv.js
