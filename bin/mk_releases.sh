#!/bin/bash

# Makes development, staging, && production releases

# - Tags the current HEAD
# - Foreach env:
#   - builds FE bundle/dist
#   - builds docker container
#   - pushes containers to Docker Hub


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

echo -n "Push Release to Docker Hub (y/n)?"
read answer
if echo "$answer" | grep -iq "^y" ;then
    docker login
    docker push spncrlkt/sprout:staging.$1
    docker push spncrlkt/sprout:production.$1
else
    echo "Fine, I Won't"
fi
