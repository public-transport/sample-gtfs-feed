'use strict'

const {center, museum, airport, lake} = require('./trips')
const {aDowntown, aOutbound, bDowntown, bOutbound} = require('./trips')

const applyToTrips = (trips, seq, arr, dep, stop, more = {}) => {
	const stop_times = []
	for (let trip of trips) {
		stop_times.push(Object.assign({
			trip_id: trip.trip_id,
			arrival_time: arr,
			departure_time: dep,
			stop_id: stop.stop_id,
			stop_timesuence: seq + ''
		}, more))
	}
	return stop_times
}

const aDowntown = [].concat(
	applyToTrips(aDowntown, 3, '15:23', '15:24', airport),
	applyToTrips(aDowntown, 4, '15:30', '15:31', museum),
	applyToTrips(aDowntown, 5, '15:35', '15:36', center)
)

const aOutbound = [].concat(
	applyToTrips(aOutbound, 2, '17:13', '17:14', center),
	applyToTrips(aOutbound, 3, '17:20', '17:21', museum),
	applyToTrips(aOutbound, 4, '17:25', '17:26', airport)
)

const bDowntown = [].concat(
	applyToTrips(bDowntown, 1, '13:13', '13:14', airport),
	applyToTrips([bDowntown[0]], 3, '13:20', '13:22', lake),
	applyToTrips(bDowntown.slice(1), 3, '13:22', '13:24', lake),
	applyToTrips(bDowntown, 5, '13:30', '13:31', center)
)

const bOutbound = [].concat(
	applyToTrips(bOutbound, 11, '18:13', '18:14', center),
	applyToTrips([bOutbound[0]], 13, '18:20', '18:22', lake),
	applyToTrips(bOutbound.slice(1), 13, '18:22', '18:24', lake),
	applyToTrips(bOutbound, 15, '18:30', '18:31', airport)
)

const all = [].concat(aDowntown, aOutbound, bDowntown, bOutbound)
module.exports = all
