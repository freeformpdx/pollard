#!/bin/bash

sudo yum update -y
sudo yum install -y docker
sudo yum install -y git
sudo service docker start
sudo usermod -a -G docker ec2-user
sudo reboot
