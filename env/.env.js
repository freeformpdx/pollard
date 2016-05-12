module.exports = {
	ENV: process.env.ENV || 'development',
	SOCKET_URL: process.env.SOCKET_URL || '0.0.0.0:3420',
	ECHO_NEST: process.env.ECHO_NEST || '',
	FMA: process.env.FMA || '',
	DISCOGS: process.env.DISCOGS || '',
	DB_NAME: process.env.DB_NAME || 'mongodb://mongo/',
	LOAD_SCHED_PW: process.env.LOAD_SCHED_PW || ''
}
