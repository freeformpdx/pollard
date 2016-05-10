#!/bin/bash

# USAGE: ./bin/docker_restore_mongo.sh

# runs mongo restore script in mongo docker container

set -e

echo "Starting mongo restore"

docker run \
    --rm \
    -it \
    --link mongo:mongo \
    -v /data/backup:/data/backup\
    --name mongo_restore \
    mongo:3.1 \
    bash -c 'mongorestore --drop -v --host $MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT /data/backup'
