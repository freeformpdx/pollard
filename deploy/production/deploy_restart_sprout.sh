#!/bin/bash
source hosts.env

echo -e "\n** pushing assets"

deploy/production/scp_server_assets.sh

echo -e "\n** restarting sprout"

ssh ec2-user@$KFFPPROD \
  './bin/production_restart_sprout.sh'
