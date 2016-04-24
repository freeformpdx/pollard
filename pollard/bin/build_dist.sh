#!/bin/bash

# Builds minified dist files and moves to sprout directory
# USAGE: ./pollard/bin/build_dist.sh [target]
#          where target in [development, staging, production]

./env/build_env.sh $1

cd pollard

npm run build-min
cp dist/bundle.min.js ../sprout/public/bundle.js
cp index.html ../sprout/public/index.html

cd ..
