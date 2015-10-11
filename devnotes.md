# DEV NOTES

## 10/10
- Setting up project and factoring out react-redux-boilerplate cruft
- build component hierarchy

### API SEARCH
https://freemusicarchive.org/api
http://www.last.fm/api/tos
http://www.programmableweb.com/news/25-music-apis/2008/02/21

## 10/11
- STATE && REDUCERS

```JSON
{
	view: {
		setlist: {
			selected: 0 
		},
		song: {
			selected: 0
		}
	},
	data: {
		set: {
			date: '',
			time: '',
			name: '',
			image: '',
			setlist: [
				'songs'
			],
		},
		songs: [{
			inputs: {
				title: '',
				artist: '',
				album: '',
				label: '',
				year: '',
				notes: '',
			},
			played: true
		}]
	}
}
```

- ACTIONS
		-	add song
		- mark as played
		-	update song inputs
		-	delete song
		- add setlist
		- choose setlist / edit setlist inputs
		- delete setlist

