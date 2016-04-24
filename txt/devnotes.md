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
- [X] build FE dist w/ secrets - dev
- [X] build FE dist w/ secrets - staging
- [X] build FE dist w/ secrets - prod

## systems

- [ ] deploy target ip/host info stuff
- [ ] BE - install && configure pm2

## docker build

- [ ] docker build sprout script - dev
- [ ] docker build sprout script - staging
- [ ] docker build sprout script - prod

## docker run

- [ ] docker run all services script - dev
- [ ] docker run all services script - staging
- [ ] docker run all services script - prod

## miggity mongo

- [ ] mongo - add volume for /data/db/
- [ ] mongo - backup script (pause mongod; cp out /data/db; push 2 s3)

## Clean up && whatnot

- [ ] monitoring tests
- [ ] nginx reverse proxy container && configuration


# FINISHED PROCESS

## build FE dist

- cd pollard/
- ./bin/build_dist.sh [development, staging, production]



# NOTES

## old build process

- ./bin/buildenv.sh => exports env.list && calls `node bin/buildenv.js`
- node bin/buildenv.js => builds env.js file from env template (.env.js) and env vars
- `webpack --config webpackmin.config.js --progress --colors` => produces dist bundle in dist/bundle.min.js
