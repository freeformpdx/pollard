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

- [X] [MNGO] ./bin/docker\_mongo\_backup.sh
- [X] [MNGO] ./bin/docker\_mongo\_restore.sh
- [X] [MNGO] scp backups to local
- [X] [MNGO] local backups 2 aws S3
- [X] [SYSE] mk staging versions of init && restart scripts
- [X] [LIST] delete action
- [X] [LIST] play song exists
- [X] [LIST] play song action
- [X] [LIST] play song action => now playing
- [X] [LIST] select song
- [X] [LIST] edit song inputs
- [X] [DVLP] Add button in Search: add blank song
- [X] [DVLP] Add button in Search: add talk break action
- [X] [DVLP] imgs on selected song


# WH1P

- [ ] [DVLP] deselect song button
- [ ] [UIUX] Group all non-top level song actions into menu
             - top level: play
             - other: delete, from music library


# ALRT

- [ ] [TEST] Load-test script
- [ ] [ALRT] run all smoke tests from studio && from somewhere else? (home server?)
- [ ] [ALRT] send page/email
- [ ] [ALRT] maybs run erry 5 mins? if dead for 4 runs (20 mins) call it fux0rd
- [ ] [TEST] has loaded schedule smoke test
- [ ] [TEST] 'now playing' smoke test (has 'now playing' and now playing updated in last 2 hrs)
- [ ] [TEST] stream server dead smoke test
- [ ] [TEST] can't reach freeformportland.org smoke test


# TEST

- [ ] [LIST] reorder/D&&D


# T4SX

- [ ] [DVLP] adding song b4 search results come back causes setState errors in promise
- [ ] [SYSE] init && restart: use deploy target tags
- [ ] [RFXR] rm setState calls from SearchSongDisplay
- [ ] [DVLP] gotta do a fresh install && devnotes 4 set up && whatnot
- [ ] [SYSE] ? mk one liner build=>release=>push 2 staging script
- [ ] [LGNG] get some mongo logging
- [ ] [XTRA] nginx reverse proxy container && configuration


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
