#!/bin/bash

# stops sprout
# pulls production.latest tag
# restarts sprout

# USAGE ./bin/prod_restart_sprout.sh

docker stop sprout
docker rm sprout
docker pull spncrlkt/sprout:production.latest
bin/docker_run_sprout_container.sh production latest
