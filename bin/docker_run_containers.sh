#!/bin/bash

# USAGE: ./bin/docker_run_containers.sh [development, staging, production]

# runs docker containers in their proper order

if [ -z "$1" ]; then
  echo "No env specified. Use [development, staging, production]"
  exit 1
fi

set -e

echo "Starting mongo_data"

docker create -v /data/db:/data/db --name mongo_data mongo:3.1


##################

echo "Starting mongo"

docker run -d --restart=always \
    --volumes-from mongo_data \
    --name mongo \
    mongo:3.1


##################

echo "Starting sprout"

bin/docker_run_sprout_container.sh $1 latest
