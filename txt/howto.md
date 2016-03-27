# DEV NOTES
LOCALS ONLY!!!

           _____
           |_ _|
      n    (O O)    n
      H   _|\_/|_   H
     nHnn/ \___/ \nnHn
    <V VV /     \ VV V>
     \__\/|     |\/__/

	   EAT SHIT && DIE

## commands 2 learn && type
- `sudo tail -f /var/log/nginx/postdata.log`
- `sudo service nginx restart`
- `sudo vim /etc/nginx/nginx.conf`

## Logging in to AWS
- add yr IP to AWS security rules
- get that ssh key from AWS
- `ssh-add ~/.ssh/kffp-dev.pem`
- `ssh ec2-user@XXX.XXX.XXX.XXX.us-west-1.compute.amazonaws.com`

## Once yr logged in to AWS
- INSTALL DOCKER IF NOT EXISTS`
- `sudo yum update -y`
- `sudo yum install -y docker`
- `sudo yum install -y git`
- `sudo service docker start`
- `sudo usermod -a -G docker ec2-user`
- `reboot`
- `docker info
- `docker ps`

- in ~
- `vim env.list`
- `docker pull spncrlkt/pollard`
- `docker run -p 80:3420 --env-file ./env.list -it spncrlkt/pollard bash bin/dockerrun.sh`
- `docker exec -it <cont_name> bash bin/start_app.sh`
- `docker ps`
- `docker logs MACHINE_NAME`
- `docker exec -it MACHINE_NAME bash`


### DOCKER SHIT
- Start docker shell
- `bash --login '/Applications/Docker/Docker Quickstart Terminal.app/Contents/Resources/Scripts/start.sh'`

- Build from repo
- `docker build -t spncrlkt/pollard https://github.com/freeformpdx/pollard.git`
- Push
- `docker push spncrklkt/pollard`

- Run [requires configuration details in env.list]
- `docker run -p 3240:3420 --env SOCKET_URL=192.168.99.100:3240 --env-file ./env.list -it spncrlkt/pollard bash bin/dockerrun.sh`
- Run server as daemon [requires configuration details in env.list]
- `docker run -p 3240:3420 --env SOCKET_URL=192.168.99.100:3240 --env-file ./env.list -d spncrlkt/pollard bash bin/dockerrun.sh`
- Start app
- `docker exec -it <cont_name> bash bin/restart_app.sh`

- Fucking with containers
- `docker ps`
- `docker run -p 3240:3000 -d spncrlkt/pollard`
- `docker start/stop <cont_name>`
- `docker exec -it <cont_name> bash`



### LOADING SCHEDULES INTO POLLARD
- make a post request w/ postman or w/e to: `http://kffp.rocks/api/loadSched/[LOAD_SCHED_PW]`
![alt tag](gifs/load_sched_example.png)
- 

