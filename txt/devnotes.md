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

# TASKS

# DONEZKY

- [X] run webpack dev server in dev environment w/ docker
- [X] `./bin/dev_restart_sprout.sh`
- [X] kill sprout api endpoint
- [X] can find a setlist smoke test

## testing

- [ ] has loaded schedule smoke test
- [ ] 'now playing' smoke test (has 'now playing' and now playing updated in last 2 hrs)
- [ ] X smoke test

## systems

- [ ] deploy target ip/host info stuff
- [ ] push to aws host script


## mongo

- [ ] mongo - backup script (pause mongod; cp out /data/db; push 2 s3)
- [ ] mongo - full restore from S3

## logging

- [ ] get some mongo logging

## XTRA Credit

- [ ] nginx reverse proxy container && configuration


## THINK ABOUT STUFF

- actual release promotion stuff
  - hack hack hack w/ dev server
  - mk staging release
  - deploy to staging.kffp.rocks
  - run tests
  - call it good
  - mk production release
  - deploy to kffp.rocks
  - start new sprout container on 8080
  - run non-destructive tests against new sprout container
  - run new sprout container on :80


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
