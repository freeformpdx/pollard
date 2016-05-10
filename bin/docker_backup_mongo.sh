#!/bin/bash

# USAGE: ./bin/docker_backup_mongo.sh

# runs mongo backup script in mongo docker container

set -e

echo "Starting mongo backup"

docker run \
    --rm \
    -i \
    --link mongo:mongo \
    -v /data/backup:/data/backup \
    --name mongo_backup \
    mongo:3.1 \
    bash -c 'mongodump --host $MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT --out /data/backup'
