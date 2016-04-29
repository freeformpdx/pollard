#!/bin/bash

# stops sprout
# mks release
# restarts sprout

# USAGE ./bin/dev_restart_sprout.sh

docker stop sprout
docker rm sprout
./bin/mk_dev_release.sh

docker run -d --restart=always \
    --link mongo:mongo \
    -v $PWD/env/env.js:/usr/src/sprout/env.js:ro \
    -v $PWD/logs:/usr/src/sprout/logs \
    -e "ENV=$1" \
    -p 4200:4200 \
    --name sprout \
    spncrlkt/sprout:development.latest
