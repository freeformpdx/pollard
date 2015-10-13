# DEV NOTES
LOCALS ONLY!!!

           _____
           |_ _|
      n    (O O)    n
      H   _|\_/|_   H
     nHnn/ \___/ \nnHn
    <V VV /     \ VV V>
     \__\/|     |\/__/

	     EAT SHIT



## 10/10
- Setting up project and factoring out react-redux-boilerplate cruft
- build component hierarchy

### API SEARCH
- https://freemusicarchive.org/api
- http://www.last.fm/api/tos
- http://www.programmableweb.com/news/25-music-apis/2008/02/21

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
- 00 do update song reducer
- 00 do add song component
- 00 do add song reducer
