'use strict'

module.exports = {
	agency: require('./agency'),
	stops: require('./stops'),
	routes: require('./routes'),
	trips: require('./trips'),
	stop_times: require('./stop_times').full,
	calendar: require('./calendar'),
	calendar_dates: require('./calendar_dates'),
	shapes: require('./shapes'),
	frequencies: require('./frequencies'),
	transfers: require('./transfers'),
	pathways: require('./pathways'),
	levels: require('./levels'),
	feed_info: require('./feed_info').full,
	translations: require('./translations'),
}
