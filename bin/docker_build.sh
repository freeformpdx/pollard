#!/bin/bash

# USAGE: ./bin/docker_build.sh [development, staging, production] [release_tag]
# tags build w/ env.release_tag && env.latest

if [ -z "$1" ]; then
  echo "No env specified. Use [development, staging, production]"
  exit 1
fi

if [ -z "$2" ]; then
  echo "No tag specified. Use the current release tag or 'latest'"
  exit 1
fi

docker build \
  -t spncrlkt/sprout:$1.$2 \
  -t spncrlkt/sprout:$1.latest \
  .
