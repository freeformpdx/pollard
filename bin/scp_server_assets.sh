#!/bin/bash

source hosts.env

echo -e "\n** scping env/production.env.js"

scp \
  env/production.env.js \
  ec2-user@$KFFPPROD:env.js

echo -e "\n** mkdiring bin/"

ssh ec2-user@$KFFPPROD \
  'mkdir -p bin'

echo -e "\n** scping bin/docker_run_containers.sh"

scp \
  bin/docker_run_containers.sh \
  ec2-user@$KFFPPROD:bin/docker_run_containers.sh

echo -e "\n** scping bin/docker_run_sprout_container.sh"

scp \
  bin/docker_run_sprout_container.sh \
  ec2-user@$KFFPPROD:bin/docker_run_sprout_container.sh

echo -e "\n** scping bin/prod_restart_sprout.sh"

scp \
  bin/prod_restart_sprout.sh \
  ec2-user@$KFFPPROD:bin/prod_restart_sprout.sh
