#!/bin/bash

# stops sprout
# mks release
# restarts sprout

# USAGE ./bin/dev_restart_sprout.sh

docker stop sprout
docker rm sprout
bin/mk_dev_release.sh
bin/docker_run_sprout_container.sh development latest
