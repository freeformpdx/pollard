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
     (OR, BE WELL &&
       DO GOOD WORK &&
       KEEP IN TOUCH)

# D34D

- [X] [SYSE] mv ./env/env.js => ./env.js
- [X] [SYSE] docker_run_containers expose port 80
- [X] [SYSE] pull docker run command into single spot
      ([dev/prod]_restart_sprout, docker_run_containers)
- [X] [SYSE] mk a prod_restart_sprout.sh script

# WH1P

- [ ] [SYSE] mk relesases: targeted to env

# T4SX

- [ ] [SYSE] deploy target ip/host info stuff
- [ ] [SYSE] push to aws host script
- [ ] [ALRT] run all smoke tests from studio && from somewhere else? (home server?)
- [ ] [ALRT] send page/email
- [ ] [ALRT] maybs run erry 5 mins? if dead for 4 runs (20 mins) call it fux0rd
- [ ] [MNGO] backup script (pause mongod; cp out /data/db; push 2 s3)
- [ ] [MNGO] full restore from S3
- [ ] [CODE] load schedule FE
- [ ] [TEST] has loaded schedule smoke test
- [ ] [TEST] 'now playing' smoke test (has 'now playing' and now playing updated in last 2 hrs)
- [ ] [TEST] stream server dead smoke test
- [ ] [TEST] can't reach freeformportland.org smoke test
- [ ] [LGNG] get some mongo logging
- [ ] [XTRA] nginx reverse proxy container && configuration


# PUSH 2 AWS SCRIPT


it shd:
- scp env file
- scp run containers script
- scp restart sprout script
- then either: init containers @ tag || restart sprout @ tag


# RUMINATIN AF RN

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
