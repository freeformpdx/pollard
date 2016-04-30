#!/bin/bash

# Makes release
#
# - builds FE bundle/dist
# - builds docker container


# USAGE: ./bin/mk_dev_release.sh [opt: tag]

if [ -z "$1" ]; then
  echo "No env specified. Use [development, staging, production]"
  exit 1
fi


TAG=$2

if [ -z "$2" ]; then
    TAG='latest'
fi

pollard/bin/build_dist.sh $1
bin/docker_build.sh $1 $TAG
