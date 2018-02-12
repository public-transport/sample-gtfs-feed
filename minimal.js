'use strict'

module.exports = {
	agency: require('./agency').minimal,
	stops: require('./stops'),
	routes: require('./routes').minimal,
	trips: require('./trips').minimal,
	stop_times: require('./stop_times').minimal,
	calendar: require('./calendar').minimal,
	calendar_dates: require('./calendar_dates'),
	feed_info: require('./feed_info').minimal
}
