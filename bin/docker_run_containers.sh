#!/bin/bash

# runs docker containers in their proper order
# assumes you've run ./pollard/bin/build_dist.sh [development, staging, production]

set -e

echo "Starting sprout"

docker run -d --restart=always \
    -v $(PWD)/data:/data \
    --name mongo \
    mongo:3.1

docker run -d --restart=always \
    --link mongo:mongo \
    -v $PWD/env/env.js:/usr/src/sprout/env.js:ro \
    -e "ENV=$1" \
    -p 4200:4200 \
    kffp/sprout
