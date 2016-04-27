#!/bin/bash

# USAGE: ./bin/docker_build.sh [development, staging, production] [release_tag]
docker build -t spncrlkt/sprout:$1.$2 .
