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

## buildin for test/local dev

- ./pollard/bin/build_dist.sh [development, staging, production]
- ./bin/docker_build.sh [development, staging, production] [tag/'latest']


## runnin

- ./bin/docker_run_containers.sh [development, staging, production]


## releasin && pushin 2 dockr hub

- yr one-line build_dist, docker_build, docker push soln:
- ./release/mk_all_releases.sh [tag]

## deployin

- for a brand new install on a host: `./deploy/[production/staging]/init_sprout.sh`
- for a running sprout code update: `./deploy/[production/staging]/restart_sprout.sh`

## devin

with sprout && mongo containers running:

- `cd pollard && npm start`
- in yr browser at 0.0.0.0:3000

This runs webpack-dev-server, w/ hot reloading && other goodies. Strickly for dev purposes.

## functional tests

- `java -jar selenium-server-standalone-2.53.0.jar`
- `cd test`
- `HOST='http://0.0.0.0:3000' ./node_modules/.bin/wdio`
- `HOST='http://0.0.0.0:3000' ./node_modules/.bin/wdio --suite drag_and_drop`

## mongo stuff:

- Lookin @ shiznards
- `show dbs`
- `show collections`

- Lookin @ records
- `use test`
- `db.setlists.find({}, {_id: true})`
- `it`


## Logging in to AWS
- add yr IP to AWS security rules
- get that ssh key from AWS
- `ssh-add ~/.ssh/kffp-dev.pem`
- `ssh ec2-user@XXX.XXX.XXX.XXX.us-west-1.compute.amazonaws.com`


## aws cli for backing up to S3
- [IAM](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-set-up.html)
- [CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html#install-bundle-other-os)
-


### LOADING SCHEDULES INTO POLLARD
- make a post request w/ postman or w/e to: `http://kffp.rocks/api/loadSched/[LOAD_SCHED_PW]`

