'use strict'

const {ok} = require('assert')
const {center, museum, airport, lake} = require('./stops')
const {
	aDowntown, aOutbound,
	bDowntown, bOutbound,
	cDowntown, cOutbound,
	dst,
} = require('./trips')

const airport1 = airport.stops.find(({stop_id}) => stop_id === 'airport-1')
ok(airport1)

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
	// Same station (not stop) & departure_time as cDowntown.
	applyToTrips(aDowntown, 3, '15:23:00', '15:24:00', airport1),
	applyToTrips(aDowntown, 4, '15:30:00', '15:31:00', museum.station),
	// Same stop & arrival_time as cDowntown.
	applyToTrips(aDowntown, 5, '15:35:00', '15:36:00', center.station)
)

const forAOutbound = [].concat(
	applyToTrips(aOutbound, 2, '17:13:00', '17:14:00', center.station),
	applyToTrips(aOutbound, 3, '17:20:00', '17:21:00', museum.station),
	applyToTrips(aOutbound, 4, '17:25:00', '17:26:00', airport.station)
)

const forBDowntown = [].concat(
	applyToTrips(bDowntown, 1, '13:13:00', '13:14:00', airport.station, {
		timepoint: 1, // times are considered exact
	}),
	applyToTrips([bDowntown[0]], 3, '13:20:00', '13:22:00', lake.station, {
		pickup_type: 3, // must arrange with driver to arrange pickup
	}),
	applyToTrips(bDowntown.slice(1), 3, '13:22:00', '13:24:00', lake.station, {
		pickup_type: 1, // no pickup available
	}),
	applyToTrips(bDowntown, 5, '13:30:00', '13:31:00', center.station, {
		timepoint: 1, // times are considered exact
	})
)

const forBOutbound = [].concat(
	applyToTrips(bOutbound, 11, '18:13:00', '18:14:00', center.station, {
		timepoint: 1, // times are considered exact
	}),
	applyToTrips([bOutbound[0]], 13, '18:20:00', '18:22:00', lake.station, {
		drop_off_type: 3, // must arrange with driver to arrange drop off
	}),
	applyToTrips(bOutbound.slice(1), 13, '18:22:00', '18:24:00', lake.station, {
		drop_off_type: 1, // no drop off available
	}),
	applyToTrips(bOutbound, 15, '18:30:00', '18:31:00', airport.station, {
		timepoint: 1, // times are considered exact
	})
)

const forCDowntown = [].concat(
	// Same station (not stop) & departure_time as ADowntown.
	applyToTrips(cDowntown, 0, '15:22:30', '15:24:00', airport.station),
	// Same stop & arrival_time as ADowntown.
	applyToTrips(cDowntown, 1, '15:35:00', '15:36:00', center.station),
)
const _cOutboundAllDay = cOutbound.find(({trip_id}) => trip_id === 'c-outbound-all-day')
ok(_cOutboundAllDay)
const cOutboundAllDay = [_cOutboundAllDay]
const _cOutboundOnWeekends = cOutbound.find(({trip_id}) => trip_id === 'c-outbound-on-weekends')
ok(_cOutboundOnWeekends)
const cOutboundOnWeekends = [_cOutboundOnWeekends]

const forCOutboundAllDay = [].concat(
	// contains a loop: airport -> museum -> airport
	applyToTrips(cOutboundAllDay, 1,      null,  '19:20:00', airport.station),
	applyToTrips(cOutboundAllDay, 2, '19:29:30', '19:30:30', museum.station),
	applyToTrips(cOutboundAllDay, 3, '19:39:30', '19:40:30', airport.station),
	applyToTrips(cOutboundAllDay, 4, '19:50:00',      null,  center.station),
)
const forCOutboundOnWeekends = [].concat(
	applyToTrips(cOutboundOnWeekends, 1,      null,  '19:20:00', airport1),
	applyToTrips(cOutboundOnWeekends, 2, '19:29:30', '19:30:30', museum.station),
	applyToTrips(cOutboundOnWeekends, 3, '19:50:00',      null,  center.station),
)
const forCOutbound = [
	...forCOutboundAllDay,
	...forCOutboundOnWeekends,
]

const forDst = [].concat(
	applyToTrips(dst, 0, '25:55:00', '25:58:00', airport.station),
	applyToTrips(dst, 1, '26:03:00', '26:05:00', center.station),
)

const all = [].concat(
	forADowntown, forAOutbound,
	forBDowntown, forBOutbound,
	forCDowntown, forCOutbound,
	forDst,
)
module.exports = Object.assign(all, {
	forADowntown, forAOutbound,
	forBDowntown, forBOutbound,
	forCDowntown, forCOutbound,
	forDst,
	minimal: [].concat(forADowntown, forAOutbound),
	full: all
})
