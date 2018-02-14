'use strict'

module.exports = {
	agency: require('./agency'),
	stops: require('./stops'),
	routes: require('./routes'),
	trips: require('./trips'),
	stop_times: require('./stop_times').full,
	calendar: require('./calendar'),
	calendar_dates: require('./calendar_dates'),
	feed_info: require('./feed_info').full
}
