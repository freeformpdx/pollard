#!/bin/bash
set -e

if [ "$ENV" = 'development' ]; then
  echo "Running development server"
  exec npm start
elif [ "$ENV" = 'staging' ]; then
  echo "Running staging server"
  exec pm2 start processes.json --no-daemon
else
  echo "Running production server"
  exec pm2 start processes.json --no-daemon
fi
