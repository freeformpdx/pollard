#!/bin/bash

# USAGE: ./bin/docker_restore_mongo.sh /path/to/backup
# TYPICALLY: ./bin/docker_restore_mongo.sh /home/ec2-user/backup

# runs mongo restore script in mongo docker container

if [ -z "$1" ]; then
  echo "No backup dir specified"
  exit 1
fi

set -e

echo "Starting mongo restore"

docker run \
    --rm \
    -i \
    --link mongo:mongo \
    -v $1:/data/backup \
    --name mongo_restore \
    mongo:3.1 \
    bash -c 'mongorestore --drop -v --host $MONGO_PORT_27017_TCP_ADDR:$MONGO_PORT_27017_TCP_PORT /data/backup'
