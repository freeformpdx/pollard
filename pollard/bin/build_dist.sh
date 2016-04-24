#!/bin/bash

# Builds minified dist files and moves to sprout directory
# USAGE: ./bin/build_dist.sh [target]
#          where target in [development, staging, production]

./bin/build_env.sh $1

npm run build-min
cp dist/bundle.min.js ../sprout/public/bundle.js
cp index.html ../sprout/public/index.html
