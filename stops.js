'use strict'

const {fta} = require('./agency')

const center = [{ // minimal
	stop_id: 'center',
	stop_name: 'City Center',
	stop_lat: 52.5,
	stop_lon: 13.5
}]
center.station = center[0]
center.stops = []

const airport = [{ // full
	stop_id: 'airport',
	stop_code: '🛫',
	stop_name: 'International Airport (ABC)',
	stop_desc: 'train station at the Internationl Airport (ABC)',
	stop_lat: 52,
	stop_lon: 14,
	// todo: zone_id
	stop_url: fta.agency_url + 'stations/airport.html',
	location_type: '1',
	stop_timezone: 'Europe/Berlin',
	wheelchair_boarding: '1'
}, {
	stop_id: 'airport-1',
	stop_name: 'Platform 1',
	stop_desc: 'Platform 1',
	stop_lat: 52.1,
	stop_lon: 14.1,
	// todo: zone_id
	location_type: '0',
	parent_station: 'airport',
	wheelchair_boarding: '2',
}, {
	stop_id: 'airport-2',
	stop_name: 'Platform 2',
	stop_desc: 'Platform 2',
	stop_lat: 52.2,
	stop_lon: 14.2,
	// todo: zone_id
	location_type: '0',
	parent_station: 'airport',
	wheelchair_boarding: '0',
}]
airport.station = airport[0]
airport.stops = airport.slice(1)

const museum = [{ // full
	stop_id: 'museum',
	stop_code: '🎫',
	stop_name: 'Awesome Museum',
	stop_desc: 'The Awesome Museum displays awesome stuff.',
	stop_lat: 51,
	stop_lon: 12,
	// todo: zone_id
	stop_url: fta.agency_url + 'stations/museum.html',
	location_type: '1'
}]
museum.station = museum[0]

const lake = [{
	stop_id: 'lake',
	stop_code: '🏊‍',
	stop_name: 'Lake',
	stop_lat: 52,
	stop_lon: 13,
	// todo: zone_id
	stop_url: fta.agency_url + 'stations/lake.html'
}]
lake.station = lake[0]

const all = [].concat(center, airport, museum, lake)
module.exports = Object.assign(all, {center, airport, museum, lake})
