#!/bin/bash
source hosts.env

DATE="$(date +%s)"

echo -e "\n** pushing assets"

deploy/production/scp_server_assets.sh

echo -e "\n** ssh-running mongo_backup "

ssh ec2-user@$KFFPPROD \
    './bin/docker_backup_mongo.sh'

echo -e "\n** scping backup 2 local"

mkdir -p backup/production/$DOTE

scp -r \
  ec2-user@$KFFPPROD:/data/backup \
  backup/production/$DATE

aws s3 cp \
  --recursive \
  backup/production/$DATE \
  s3://kffp.backups/production/$DATE
