'use strict'

const {a, b} = require('./routes')
const {allDay, onWorkingDays, onWeekends} = require('./calendar')

// minimal
const aDowntown = [{
	route_id: a.route_id,
	service_id: allDay.service_id,
	trip_id: 'a-downtown-all-day',
	// trip_headsign: 'Ada (Downtown)',
}]
const aOutbound = [{
	route_id: a.route_id,
	service_id: allDay.service_id,
	trip_id: 'a-outbound-all-day',
	// trip_headsign: 'Ada (Outbound)',
}]

// full
const bDowntown = [{
	route_id: b.route_id,
	service_id: onWorkingDays.service_id,
	trip_id: 'b-downtown-on-working-days',
	trip_headsign: 'Babbage (Downtown)',
	trip_short_name: 'Babbage',
	direction_id: '0',
	// todo: block_id
	// todo: shape_id
	wheelchair_accessible: '1',
	bikes_allowed: '0'
}, {
	route_id: b.route_id,
	service_id: onWeekends.service_id,
	trip_id: 'b-downtown-on-weekends',
	trip_headsign: 'Babbage (Downtown)',
	trip_short_name: 'Babbage',
	direction_id: '0',
	// todo: block_id
	// todo: shape_id
	wheelchair_accessible: '1',
	bikes_allowed: '0'
}]
const bOutbound = [{
	route_id: b.route_id,
	service_id: onWorkingDays.service_id,
	trip_id: 'b-outbound-on-working-days',
	trip_headsign: 'Babbage (Outbound)',
	trip_short_name: 'Babbage',
	direction_id: '1',
	// todo: block_id
	// todo: shape_id
	wheelchair_accessible: '0',
	bikes_allowed: '1'
}, {
	route_id: b.route_id,
	service_id: onWeekends.service_id,
	trip_id: 'b-outbound-on-weekends',
	trip_headsign: 'Babbage (Outbound)',
	trip_short_name: 'Babbage',
	direction_id: '1',
	// todo: block_id
	// todo: shape_id
	wheelchair_accessible: '0',
	bikes_allowed: '1'
}]

const all = [].concat(aDowntown, aOutbound, bDowntown, bOutbound)
module.exports = Object.assign(all, {
	aDowntown, aOutbound, minimal: [aDowntown, aOutbound],
	bDowntown, bOutbound, full: [bDowntown, bOutbound]
})
