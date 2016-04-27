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

## DONEZKY

- [X] split FE/BE
- [X] build FE dist w/ secrets - development/staging/production
- [X] BE - install && configure pm2
- [X] Dockerfile
- [X] docker build sprout script - development/staging/production
- [X] mongo - add volume for /data/db/
- [X] docker run all services script
- [X] get some sprout/express logging


## systems

- [ ] deploy target ip/host info stuff
- [ ] push to aws host script


## mongo

- [ ] mongo - backup script (pause mongod; cp out /data/db; push 2 s3)

## Clean up && whatnot

- [ ] kill sprout api endpoint
- [ ] monitoring tests
- [ ] nginx reverse proxy container && configuration

## logging

- [ ] get some mongo logging

## tagging && pushin 2 docker hub

- [ ] tagging on build [env + version?]
- [ ] pushin 2 docker hub


# FINISHED PROCESS

## buildin

- ./pollard/bin/build_dist.sh [development, staging, production]
- ./bin/docker_build.sh


## runnin

- ./bin/docker_run_containers.sh [development, staging, production]



# NOTES

## old build process

- ./bin/buildenv.sh => exports env.list && calls `node bin/buildenv.js`
- node bin/buildenv.js => builds env.js file from env template (.env.js) and env vars
- `webpack --config webpackmin.config.js --progress --colors` => produces dist bundle in dist/bundle.min.js
