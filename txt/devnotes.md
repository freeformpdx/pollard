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
- XX init basic state

## 10/12
- XX Connect components to read from state
- XX Wire up select song action
- XX do update song reducer

## 10/13
- XX do add song component
- XX do add song reducer
- XX do search cmpnt
- XX do search rdxr

## 10/14
- 00 Fix search api calls
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

- XX do add song from search results action
- XX do mark song played cmpnt
- XX do mark song played rdxr
- XX do deletesong cmpnt
- XX do deletesong rdxr

- XX on add found song, clear search list && select new song
- XX SHIT UI: Search songs bar
- XX SHIT UI: Search results list


## 10/19
Focused on more UI prettification \r\n
- XX SHIT UI: Song single line
- XX SHIT UI: SelectedSong
- XX SHIT UI: Refine selectSong onClick to target 
- XX SHIT UI: line up search bar buttons and Song buttons
- XX SHIT UX: hide delete button except on detail
- XX SHIT UI: search bar and selected song XS styling
- XX SHIT UI: md? weird state with 12-grid songInputs from sm-med
- XX SHIT UX: confirm delete button - localState hack

## 10/20
- XX SHIT UI: SongInput widths on XS
- XX Set up EC2 instance
- XX installed nginx - config - gzip
- XX built basic build/min/scp to EC2 script
- XX Add fetch polyfill for safari/iOS


### SIZE MATTERZ
minified && gzipped the app went from 1.2M -> 80K

Bootstrap + glyphicons adds 43K

Total page size = 123K


## 10/21
- Simple state post to nginx server
	- XX nginx log all requests && request bodies to /post
	- XX redux middleware to post state tree to /post on add/update/delete/mark-played

- Usability testing notes go here
	-



## ROLLING TO DO

- FIX SHIT UI
	- 00 imgs on song/selectedSong xs && sm+

- FIX SHIT UX
	- 00 enter on title/track should search
	- 00 search state should be obvious
	- 00 no results found state
	- 00 search API still suxdix

- Make Songs OrderedMap so adds don't get shuffled


## commands 2 learn && type

- `sudo tail -f /var/log/nginx/postdata.log`
- `sudo service nginx restart`
- `sudo vim /etc/nginx/nginx.conf`
- `ssh ec2-user@ec2-54-153-51-198.us-west-1.compute.amazonaws.com`
