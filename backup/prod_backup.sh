#!/bin/bash
source hosts.env

echo -e "\n** pushing assets"

deploy/scp_server_assets.sh

echo -e "\n** ssh-running mongo_backup "

ssh ec2-user@$KFFPPROD \
    './bin/docker_backup_mongo.sh'

echo -e "\n** scping backup 2 local"

scp -r \
  ec2-user@$KFFPPROD:/data/backup \
  backup/prod
