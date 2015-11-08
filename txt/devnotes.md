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



## 10/10
- Setting up project and factoring out react-redux-boilerplate cruft
- build component hierarchy

### API SEARCH
- https://freemusicarchive.org/api
- http://www.last.fm/api/tos
- http://www.programmableweb.com/news/25-music-apis/2008/02/21

Echonest and 7digital APIs are only so-so.
I should look into spotify/musicbrainz next,
but for now I'm going to finish workflow stuff.

[Echonest -> spotify](http://stackoverflow.com/questions/26964072/how-to-get-the-spotify-id-of-a-specific-song-with-echonest-api?rq=1)

[Echonest Release Info gathering](http://stackoverflow.com/questions/33044342/album-release-dates-echonest)


## 10/11
- STATE && REDUCERS

```JSON
{
	view: {
		set: {
			selected: 0 
		},
		song: {
			selected: 0
		}
	},
	data: {
		sets: {
			'id': {
				date: '',
				time: '',
				name: '',
				image: '',
				setlist: [
					'songs'
				],
			},
		},
		songs: {
			'id': {
				inputs: {
					title: '',
					artist: '',
					album: '',
					label: '',
					year: '',
					notes: '',
				},
				played: true
			},
		}
	}
}
```

### ACTIONS
-	add song to setlist
- search for song
- select song
- mark song as played
-	update song inputs
-	delete song
- add set
- choose set / edit set inputs
- delete set

UP NEXT:
- [X] init basic state

## 10/12
- [X] Connect components to read from state
- [X] Wire up select song action
- [X] do update song reducer

## 10/13
- [X] do add song component
- [X] do add song reducer
- [X] do search cmpnt
- [X] do search rdxr

## 10/14
- [X] Fix search api calls
- https://freemusicarchive.org/api
    couldn't get it to work. 
- http://developer.echonest.com/
    Good title/artist search, spotty album info, provides
		release info for 7digital api - could loop over songs
		and build a big request to gather all album info 
		should check if that 7digital api returns more than
		the spotty info from echonest
    

## 10/18
Ended up doing shitty loop over results from Echonest, building 7digital
release API requests, then dispatching them and building flattened JSON
of display info. This is POC finished for now.

- [X] do add song from search results action
- [X] do mark song played cmpnt
- [X] do mark song played rdxr
- [X] do deletesong cmpnt
- [X] do deletesong rdxr

- [X] on add found song, clear search list && select new song
- [X] SHIT UI: Search songs bar
- [X] SHIT UI: Search results list


## 10/19
Focused on more UI prettification \r\n
- [X] SHIT UI: Song single line
- [X] SHIT UI: SelectedSong
- [X] SHIT UI: Refine selectSong onClick to target 
- [X] SHIT UI: line up search bar buttons and Song buttons
- [X] SHIT UX: hide delete button except on detail
- [X] SHIT UI: search bar and selected song XS styling
- [X] SHIT UI: md? weird state with 12-grid songInputs from sm-med
- [X] SHIT UX: confirm delete button - localState hack

## 10/20
- [X] SHIT UI: SongInput widths on XS
- [X] Set up EC2 instance
- [X] installed nginx - config - gzip
- [X] built basic build/min/scp to EC2 script
- [X] Add fetch polyfill for safari/iOS


### SIZE MATTERZ
minified && gzipped the app went from 1.2M -> 80K

Bootstrap + glyphicons adds 43K

Total page size = 123K


## 10/21
- Simple state post to nginx server
	- [X] nginx log all requests && request bodies to /post
	- [X] redux middleware to post state tree to /post on add/update/delete/mark-played
	- [X] use spotify API for releas searches

- Usability testing notes go here
	- Search API seems to be the highest 'touch' point, blocker. Hopefully
		spotify API meets our needs.
	- Didn't test delete/mark played, just search stuff


## 10/23
- [X] search state should be obvious
- [X] no results found state
- [X] label info from spotify API
- [X] imgs on song/selectedSong xs && sm+
- [X] Make Songs OrderedMap so adds don't get shuffled

## 10/24
- [X] enter on title/track should search
- [X] remove test data
- [X] add empty song component w/ hintz
- [X] Emojis now load right on dev server


## 10/25
- [X] BE: setup express/socketio
- [X] FE: setup socketio 
- [X] BE: setup super hacky mongoose model
- [X] FE: POST state to server
- [X] BE: Update setlist state on push
- [X] FE: Route to previous Setlist by ID
- [X] Forward to setlist/:id after setlistId is returned from server

## 11/08
- [ ] Write sprite API Routes 

# ROLLING TO DO
- [ ] Load setlist from server doesn't preserve order of Songs:
	- only option is to break out state server IO to handle ordered data.songs[] 
- [ ] Load setlist from server doesn't preserve order of SongInputs
	- Don't need songInput state as map, use list like so:
	- `List([['artist', 'springsteen'],['title', 'Streetz ofire']]])`
	- Weird bug tho: it's flip-flopping all over the place... reload saved
		set, and it changes order on each reload after selecting new song
- [ ] edit img urls... somehow
- [ ] clean up/break out searchSong's components/styling
- [ ] favicon??? MOTHERFUCKING WEBPACK

# SEARCH API && AUTOCOMPLETE
- Gotta get that Autocomplete, son. Throttle autocomplete requests.
- Y'know, search api is ok, but it still sucks pretty bad.
- [Rovi](http://developer.rovicorp.com/)
- [Discogs](https://www.discogs.com/developers/#), looks like it
	integrates w/ echonest

- Set up static search API comparison component page for stakeholders
- Maybe use that as the ADVANCE SONG SEARCH PICKER

## commands 2 learn && type

- `sudo tail -f /var/log/nginx/postdata.log`
- `sudo service nginx restart`
- `sudo vim /etc/nginx/nginx.conf`
- `ssh ec2-user@ec2-54-153-51-198.us-west-1.compute.amazonaws.com`
