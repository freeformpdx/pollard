# HOW 2 DO IT

KFFP LOCALS ONLY U FUKKEN GROMMET!!!

           _____
           |_ _|
      n    (O O)    n
      H   _|\_/|_   H
     nHnn/ \___/ \nnHn
    <V VV /     \ VV V>
     \__\/|     |\/__/

      PLZ 2 EAT SHIT
          && DIE

# FINISHED PROCESS

## buildin

- ./pollard/bin/build_dist.sh [development, staging, production]
- ./bin/docker_build.sh


## runnin

- ./bin/docker_run_containers.sh [development, staging, production]


## releasin

- ./bin/mk_releases.sh

## devin

with sprout && mongo containers running:

- `cd pollard && npm start`
- in yr browser at 0.0.0.0:3000

This runs webpack-dev-server, w/ hot reloading && other goodies. Strickly for dev purposes.


## Logging in to AWS
- add yr IP to AWS security rules
- get that ssh key from AWS
- `ssh-add ~/.ssh/kffp-dev.pem`
- `ssh ec2-user@XXX.XXX.XXX.XXX.us-west-1.compute.amazonaws.com`

### LOADING SCHEDULES INTO POLLARD
- make a post request w/ postman or w/e to: `http://kffp.rocks/api/loadSched/[LOAD_SCHED_PW]`
