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

- [X] Dockerfile
- [X] docker build sprout script - dev
- [X] docker build sprout script - staging
- [X] docker build sprout script - prod

## docker run

- [X] docker run all services script - dev
- [ ] docker run all services script - staging
- [ ] docker run all services script - prod

## miggity mongo

- [ ] mongo - add volume for /data/db/
- [ ] mongo - backup script (pause mongod; cp out /data/db; push 2 s3)

so i've kinda got this working, i can mount /data, but docker inspect shows:
```
"Mounts": [
            {
                "Source": "/Users/psliechty/dev/pollard/data",
                "Destination": "/data",
                "Mode": "",
                "RW": true,
                "Propagation": "rprivate"
            },
            {
                "Name": "deae7a7a4f5e991178cfbae62f31dd5f7a3f906b6cfd9733b29b7e5e4d773124",
                "Source": "/mnt/sda1/var/lib/docker/volumes/deae7a7a4f5e991178cfbae62f31dd5f7a3f906b6cfd9733b29b7e5e4d773124/_data",
                "Destination": "/data/configdb",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            },
            {
                "Name": "e76ae9f0e93e0d60c0fbe79b87adcd1dd04698d5d6977603e8296ca34984574b",
                "Source": "/mnt/sda1/var/lib/docker/volumes/e76ae9f0e93e0d60c0fbe79b87adcd1dd04698d5d6977603e8296ca34984574b/_data",
                "Destination": "/data/db",
                "Driver": "local",
                "Mode": "",
                "RW": true,
                "Propagation": ""
            }
        ],
```

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
