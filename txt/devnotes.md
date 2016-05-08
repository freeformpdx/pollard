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
- [X] [RFXR] push connect() down to AddedSongs
- [X] [RFXR] push connect() down to SearchSong
- [X] [DVLP] use react-dnd
- [X] [DVLP] selected song is busto
- [X] [DVLP] selected song spacing when dragging is goofy

# TEST

- [ ] add blank song
- [ ] add blank song w/ inputs
- [ ] add blank song after failed search
- [ ] delete action
- [ ] play song action
- [ ] play song action => now playing
- [ ] select song
- [ ] edit song inputs
- [ ] reorder/D&&D


# WH1P

- [ ] [DVLP] deselect song button
- [ ] [BUGZ] multiple + blank songs add same starting artist/title data
- [ ] [RFXR] rm setState calls from SearchSongDisplay

# T4SX

- [ ] [UIUX] Group all non-top level song actions into menu
             - top level: play, back-announced
             - other: delete, from music library
- [ ] [SYSE] init && restart: use deploy target tags
- [ ] [DVLP] gotta do a fresh install && devnotes 4 set up && whatnot
- [ ] [SYSE] mk staging versions of init && restart scripts
- [ ] [SYSE] ? mk one liner build=>release=>push 2 staging script
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
- [ ] [TEST] Unit Testing Plan && Implementation
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
