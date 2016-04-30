#!/bin/bash

# USAGE: ./env/build_env.sh [development, staging, production]

# reads in env file and puts in bash env.
# runs env/build_env.js to build ./env.js file

if [ -z "$1" ]; then
  echo "No env specified. Use [development, staging, production]"
  exit 1
fi

while read p; do
	export $p
done <env/$1.env

node env/build_env.js
