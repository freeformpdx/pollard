#!/bin/bash
source hosts.env

echo -e "\n** pushing assets"

deploy/staging/scp_server_assets.sh

echo -e "\n** restarting sprout"

ssh ec2-user@$KFFSTAGING \
  './bin/prod_restart_sprout.sh'
