#!/bin/bash

# Makes development, staging, && production releases

# 1) Tags the current HEAD
# 2) Foreach env:
#    a) builds FE bundle/dist
#    b) builds docker container
#    c) pushes containers to Docker Hub


# USAGE: ./bin/mk_relesase.sh [tag number]

git tag -a $1 -m "Auto-tag @ $1"
git push origin $1


# MK DEV RELEASE
pollard/bin/build_dist.sh development
bin/docker_build.sh development $1


# MK STAGING RELEASE
pollard/bin/build_dist.sh staging
bin/docker_build.sh staging $1


# MK PROD RELEASE
pollard/bin/build_dist.sh production
bin/docker_build.sh production $1
