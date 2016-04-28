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

## development

- [ ] run webpack dev server in dev environment w/ docker

## systems

- [ ] deploy target ip/host info stuff
- [ ] push to aws host script


## mongo

- [ ] mongo - backup script (pause mongod; cp out /data/db; push 2 s3)
- [ ] mongo - full restore from S3

## Clean up && whatnot

- [ ] kill sprout api endpoint
- [ ] smoke tests
- [ ] nginx reverse proxy container && configuration

## logging

- [ ] get some mongo logging

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
