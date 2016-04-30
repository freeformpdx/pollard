#!/bin/bash

# USAGE: ./bin/docker_run_containers.sh [development, staging, production]

# runs docker containers in their proper order

if [ -z "$1" ]; then
  echo "No env specified. Use [development, staging, production]"
  exit 1
fi

set -e

echo "Starting mongo_data"

docker create -v /data/db --name mongo_data mongo:3.1


##################

echo "Starting mongo"

docker run -d --restart=always \
    --volumes-from mongo_data \
    --name mongo \
    mongo:3.1


##################

echo "Starting sprout"

docker run -d --restart=always \
    --link mongo:mongo \
    -v $PWD/env.js:/usr/src/sprout/env.js:ro \
    -v $PWD/logs:/usr/src/sprout/logs \
    -e "ENV=$1" \
    -p 80:4200 \
    --name sprout \
    spncrlkt/sprout:$1.latest
