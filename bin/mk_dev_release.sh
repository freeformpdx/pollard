#!/bin/bash

# Makes development release
#
# - builds FE bundle/dist
# - builds docker container


# USAGE: ./bin/mk_dev_release.sh

pollard/bin/build_dist.sh development
bin/docker_build.sh development latest
