#!/bin/bash

# Makes development, staging, && production releases

# - Tags the current HEAD
# - Foreach env:
#   - builds FE bundle/dist
#   - builds docker container
#   - pushes containers to Docker Hub


# USAGE: ./bin/mk_relesase.sh [tag number]

if [ -z "$1" ]; then
  echo "No release tag specified. Use next release tag"
  exit 1
fi

git tag -a $1 -m "Auto-tag @ $1"
git push origin $1


# MK DEV RELEASE
release/mk_release.sh development $1

# MK STAGING RELEASE
release/mk_release.sh staging $1

# MK PROD RELEASE
release/mk_release.sh production $1

echo -n "Push releases to Docker Hub (y/n)?"
read answer
if echo "$answer" | grep -iq "^y" ;then
    docker login
    docker push spncrlkt/sprout:staging.$1
    docker push spncrlkt/sprout:staging.latest
    docker push spncrlkt/sprout:production.$1
    docker push spncrlkt/sprout:production.latest
else
    echo "fine then i wont u mfer"
fi

##### NOTES
# at some point should check if tags exist or smth 
# http://stackoverflow.com/questions/17790123/shell-script-trying-to-validate-if-a-git-tag-exists-in-a-git-repository-in-an
