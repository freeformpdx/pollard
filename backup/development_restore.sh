#!/bin/bash

# USAGE:
# ./backup/development_restore.sh /full/path/to/backup/production/<epoch>/backup/

if [ -z "$1" ]; then
  echo "No backup dir specified"
  exit 1
fi

./bin/docker_restore_mongo.sh $1

