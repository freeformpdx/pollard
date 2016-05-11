#!/bin/bash

# used to determine if we can ./deploy/[production,staging]/init_sprout.sh

if ! docker top mongo &>/dev/null
then
    echo "mongo not running"
    if ! docker top sprout &>/dev/null
    then
        echo "sprout not running"
        exit 0
    fi
fi

echo -e "\nmongo &&/|| sprout is currently running"
exit 1
