#!/bin/bash

# stops sprout
# pulls staging.latest tag
# restarts sprout

# USAGE ./bin/staging_restart_sprout.sh

docker stop sprout
docker rm sprout
bin/docker_run_sprout_container.sh staging latest
