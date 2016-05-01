#!/bin/bash

source hosts.env

echo -e "\n** scping env/production.env.js"

scp \
  env/production.env.js \
  ec2-user@$KFFPPROD:env.js

echo -e "\n** mkdiring bin/"

ssh ec2-user@$KFFPPROD \
  'mkdir -p bin'

echo -e "\n** scping bin/"

scp -r\
  bin/ \
  ec2-user@$KFFPPROD:.
