#!/bin/bash

source hosts.env

echo -e "\n** scping env/staging.env.js"

scp \
  env/staging.env.js \
  ec2-user@$KFFPSTAGING:env.js

echo -e "\n** mkdiring bin/"

ssh ec2-user@$KFFPSTAGING \
  'mkdir -p bin'

echo -e "\n** scping bin/"

scp -r\
  bin/ \
  ec2-user@$KFFPSTAGING:.
