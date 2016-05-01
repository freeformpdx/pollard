#!/bin/bash

source hosts.env

echo -e "\n** pushing assets"

bin/scp_server_assets.sh

echo -e "\n** rming all containers"

ssh ec2-user@$KFFPPROD \
  './bin/docker_rm_all.sh'

echo -e "\n** rming all containers"

ssh ec2-user@$KFFPPROD \
  './bin/docker_rm_all.sh'

echo -e "\n** running all containers"

ssh ec2-user@$KFFPPROD \
  './bin/docker_run_containers.sh production'
