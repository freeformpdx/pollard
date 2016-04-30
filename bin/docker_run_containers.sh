#!/bin/bash

# USAGE: ./bin/docker_run_containers.sh [development, staging, production]

# runs docker containers in their proper order

set -e

echo "Starting mongo_data"

docker create -v /data/db --name mongo_data mongo:3.1


##################

echo "Starting mongo_data"

docker run -d --restart=always \
    --volumes-from mongo_data \
    --name mongo \
    mongo:3.1


##################

echo "Starting sprout"

docker run -d --restart=always \
    --link mongo:mongo \
    -v $PWD/env/env.js:/usr/src/sprout/env.js:ro \
    -v $PWD/logs:/usr/src/sprout/logs \
    -e "ENV=$1" \
    -p 4200:4200 \
    --name sprout \
    spncrlkt/sprout:$1.latest
