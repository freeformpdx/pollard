#!/bin/bash

# USAGE: ./bin/docker_run_sprout_container.sh [development, staging, production] [release_tag]

if [ -z "$1" ]; then
  echo "No env specified. Use [development, staging, production]"
  exit 1
fi

if [ -z "$2" ]; then
  echo "No tag specified. Use the current release tag or 'latest'"
  exit 1
fi

if [ $2 = "latest" ]; then
  echo "Pulling latest"
  docker pull spncrlkt/sprout:$1.$2
fi

docker run -d --restart=always \
    --link mongo:mongo \
    -v $PWD/env.js:/usr/src/sprout/env.js:ro \
    -v $PWD/logs:/usr/src/sprout/logs \
    -e "ENV=$1" \
    -p 80:4200 \
    --name sprout \
    spncrlkt/sprout:$1.$2
