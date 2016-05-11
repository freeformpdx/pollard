#!/bin/bash

echo -e "\n*****************\n"
echo -e "*WARNING!WARNING*"
echo -e "\n*****************\n"
echo -e "THIS CAN KILL YR PROD DB"
echo -n "U REALLY WANNA INIT THE APP ON THIS SERVER (y/n)?"

read answer
if echo "$answer" | grep -iq "^y" ;then
  source hosts.env

  echo -e "\n** pushing assets"

  deploy/production/scp_server_assets.sh

  echo -e "\n** initing sprout"

  ssh ec2-user@$KFFPPROD \
    './bin/docker_check_for_running_containers.sh && ./bin/production_init_sprout.sh'
else
    echo "fine then i wont u mfer"
fi
