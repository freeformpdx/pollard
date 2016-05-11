#!/bin/bash

# run by deploy/staging/init_sprout.sh

echo -e "\n** rming all containers"
./bin/docker_rm_all.sh


echo -e "\n** running all containers"
./bin/docker_run_containers.sh staging
