#!/bin/bash
# This sets up a default centos system w/ required dependencies
# Should only need this if yr creating a new AWS image
# The current KFFP Image has this done already

sudo yum update -y
sudo yum install -y docker
sudo yum install -y git
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo reboot
