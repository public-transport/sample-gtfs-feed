'use strict'

const {center, museum, airport, lake} = require('./stops')
const {aDowntown, aOutbound, bDowntown, bOutbound, cDowntown} = require('./trips')

const applyToTrips = (trips, seq, arr, dep, stop, more = {}) => {
	const stop_times = []
	for (let trip of trips) {
		stop_times.push(Object.assign({
			trip_id: trip.trip_id,
			arrival_time: arr,
			departure_time: dep,
			stop_id: stop.stop_id,
			stop_sequence: seq + ''
		}, more))
	}
	return stop_times
}

const forADowntown = [].concat(
	applyToTrips(aDowntown, 3, '15:23', '15:24', airport.station),
	applyToTrips(aDowntown, 4, '15:30', '15:31', museum.station),
	applyToTrips(aDowntown, 5, '15:35', '15:36', center.station)
)

const forAOutbound = [].concat(
	applyToTrips(aOutbound, 2, '17:13', '17:14', center.station),
	applyToTrips(aOutbound, 3, '17:20', '17:21', museum.station),
	applyToTrips(aOutbound, 4, '17:25', '17:26', airport.station)
)

const forBDowntown = [].concat(
	applyToTrips(bDowntown, 1, '13:13', '13:14', airport.station),
	applyToTrips([bDowntown[0]], 3, '13:20', '13:22', lake.station),
	applyToTrips(bDowntown.slice(1), 3, '13:22', '13:24', lake.station),
	applyToTrips(bDowntown, 5, '13:30', '13:31', center.station)
)

const forBOutbound = [].concat(
	applyToTrips(bOutbound, 11, '18:13', '18:14', center.station),
	applyToTrips([bOutbound[0]], 13, '18:20', '18:22', lake.station),
	applyToTrips(bOutbound.slice(1), 13, '18:22', '18:24', lake.station),
	applyToTrips(bOutbound, 15, '18:30', '18:31', airport.station)
)

const forCDowntown = [].concat(
	applyToTrips(cDowntown, 0, '15:27', '15:28', airport.station),
	applyToTrips(cDowntown, 1, '15:33', '15:35', center.station)
)

// todo: 2 trips for one schedule

const all = [].concat(forADowntown, forAOutbound, forBDowntown, forBOutbound, forCDowntown)
module.exports = Object.assign(all, {
	minimal: [].concat(forADowntown, forAOutbound),
	full: all
})
