#!/bin/bash

# USAGE:
# ./backup/staging_restore.sh backup/production/<epoch>/backup/

if [ -z "$1" ]; then
  echo "No backup dir specified"
  exit 1
fi

source hosts.env

echo -e "\n** pushing assets"

deploy/staging/scp_server_assets.sh

echo -e "\n** scping backup 2 staging"

scp -r \
  $1 \
  ec2-user@$KFFPSTAGING:/home/ec2-user

echo -e "\n** ssh-running mongo_backup"

ssh ec2-user@$KFFPSTAGING \
    './bin/docker_restore_mongo.sh /home/ec2-user/backup'

