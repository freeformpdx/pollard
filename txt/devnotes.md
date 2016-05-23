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

- [X] [DVLP] deselect song button
- [X] [DVLP] componentize title line
- [X] [DVLP] if artist && title blank, display 'blank song' or smth
- [X] [DVLP] add freeform img link 2 air break
- [X] [BUGZ] long title/artist line causes inputs to display right

# WH1P

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

- [ ] [SYSE] init && restart: use deploy target tags
- [ ] [SYSE] ? mk one liner build=>release=>push 2 staging script
- [ ] [SYSE] nginx reverse proxy container && configuration
- [ ] [SYSE] move express/mongo 2 flask/postgres

- [ ] [RFXR] rm setState calls from SearchSongDisplay
- [ ] [RFXR] rm setState calls from SearchSongDisplay

- [ ] [DVLP] gotta do a fresh install && devnotes 4 set up && whatnot
- [ ] [DVLP] adding song b4 search results come back causes setState errors in promise

- [ ] [LGNG] get some mongo logging


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
