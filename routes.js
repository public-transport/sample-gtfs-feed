'use strict'

const {fta} = require('./agency')
const {bus, tram} = require('./lib/route-types')

const a = { // minimal
	route_id: 'A',
	route_short_name: 'Ada',
	route_long_name: 'Ada Lovelace Bus Line',
	route_type: bus + ''
}

const b = { // full
	route_id: 'B',
	agency_id: fta.agency_id,
	route_short_name: 'Babbage',
	route_long_name: 'Charles Babbage Tram Line',
	route_desc: 'Connects the city center and the airport.',
	route_type: tram + '',
	route_url: fta.agency_url + 'lines/babbage.html',
	route_color: 'FF0000',
	route_text_color: 'FFFFFF',
	route_sort_order: '4'
}

module.exports = Object.assign([a, b], {minimal: a, full: b})