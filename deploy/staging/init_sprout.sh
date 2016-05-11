#!/bin/bash

source hosts.env

echo -e "\n** pushing assets"

deploy/staging/scp_server_assets.sh

echo -e "\n** initing sprout"

ssh ec2-user@$KFFPSTAGING \
  './bin/docker_check_for_running_containers.sh && ./bin/staging_init_sprout.sh'
