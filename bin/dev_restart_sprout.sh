#!/bin/bash

# stops sprout
# mks release
# restarts sprout

# USAGE ./bin/dev_restart_sprout.sh

echo "Stopping sprout"
docker stop sprout
echo "rming sprout"
docker rm sprout
echo "mking dev release"
release/mk_release.sh development
echo "running dev container"
bin/docker_run_sprout_container.sh development latest
