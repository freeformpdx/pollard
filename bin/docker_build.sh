#!/bin/bash

# USAGE: ./bin/docker_build.sh [development, staging, production] [release_tag]
# tags build w/ env.release_tag && env.latest
docker build \
  -t spncrlkt/sprout:$1.$2 \
  -t spncrlkt/sprout:$1.latest \
  .
