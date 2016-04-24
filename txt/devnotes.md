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

# BEEN A LONG TIME COUSIN

- [X] split FE/BE
- [ ] BE - install && configure pm2
- [ ] deploy target ip/host info stuff
- [X] build FE dist w/ secrets - dev
- [ ] build FE dist w/ secrets - staging
- [ ] build FE dist w/ secrets - prod
- [ ] docker build sprout script - dev
- [ ] docker build sprout script - staging
- [ ] docker build sprout script - prod
- [ ] docker run all services script - dev
- [ ] docker run all services script - staging
- [ ] docker run all services script - prod
- [ ] mongo - add volume for /data/db/
- [ ] mongo - backup script (pause mongod; cp out /data/db; push 2 s3)
- [ ] monitoring tests
- [ ] nginx reverse proxy container && configuration


# current/old build process

- ./bin/buildenv.sh => exports env.list && calls `node bin/buildenv.js`
- node bin/buildenv.js => builds env.js file from env template (.env.js) and env vars
- `webpack --config webpackmin.config.js --progress --colors` => produces dist bundle in dist/bundle.min.js


# build FE dist DEV/PROD

- ./bin/buildenv.sh dev OR ./bin/buildenv.sh prod
- cp dist/bundle.min.js sprout/public/bundle.js
- cp index.html sprout/public/index.html
