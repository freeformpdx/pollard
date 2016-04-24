while read p; do
	export $p
done <env/$1.env

node env/build_env.js
