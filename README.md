# POLLARD

A DJ Playlist creator

## Stills

*SEARCH*
![search](gifs/search.png)

*SETPAGE*
![setpage](gifs/setpage.png)

*MOBILE SEARCH*

![search](gifs/mob-search.png)

*MOBILE SETPAGE*

![setpage](gifs/mob-setpage.png)

## DIY

[Dev Notes][devnotes]

## env

- `cp env/development.env.template env/development.env`
  && then enter in yr [echonest][echonestapikey]
  && [7digital][7digitalapikey] api keys

## buildin

- `./pollard/bin/build_dist.sh [development, staging, production]`
- `./bin/docker_build.sh`


## runnin

- `./bin/docker_run_containers.sh [development, staging, production]`

## releasin (WIPAF)

- ./release/mk_releases.sh


## devin

with sprout && mongo containers running:

- `cd pollard && npm start`
- in yr browser at 0.0.0.0:3000

This runs webpack-dev-server, w/ hot reloading && other goodies. Strickly for dev purposes.


### KICKSMAN
[MAS FLAIR](gifs)

![alt tag](gifs/kicks_man.gif)

### SPIRITUAL SUPPORTERS

1. [Trenton Strong](https://github.com/trentonstrong)
2. [Billiam Gatez](https://www.microsoft.com)

[devnotes]: txt/devnotes.md
[echonestapikey]: https://developer.echonest.com/account/register
[7digitalapikey]: https://api-signup.7digital.com/
