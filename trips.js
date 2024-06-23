'use strict'

const {
	a,
	b,
	c,
	d,
} = require('./routes')
const {
	allDay,
	onWorkingDays, onWeekends,
	duringDST,
} = require('./calendar')

// minimal
const aDowntown = [{
	route_id: a.route_id,
	service_id: allDay.service_id,
	trip_id: 'a-downtown-all-day',
	// trip_headsign: 'Ada (Downtown)',
	shape_id: 'a-downtown-all-day-s0',
}]
const aOutbound = [{
	route_id: a.route_id,
	service_id: allDay.service_id,
	trip_id: 'a-outbound-all-day',
	// trip_headsign: 'Ada (Outbound)',
	shape_id: 'a-outbound-all-day-s0',
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

const cDowntown = [{
	route_id: c.route_id,
	service_id: allDay.service_id,
	trip_id: 'c-downtown-all-day',
	trip_headsign: 'Cerf Express'
}]
// same route, same headsign, different service schedule
const cOutbound = [{
	route_id: c.route_id,
	service_id: allDay.service_id,
	trip_id: 'c-outbound-all-day',
	trip_headsign: 'Cerf Express (outbound)',
}, {
	route_id: c.route_id,
	service_id: onWeekends.service_id,
	trip_id: 'c-outbound-on-weekends',
	trip_headsign: 'Cerf Express (outbound)',
}]

const dst = [{
	route_id: d.route_id,
	service_id: duringDST.service_id,
	trip_id: 'during-dst-1',
	trip_headsign: 'Hello Daylight Saving Time!',
}]

const all = [].concat(
	aDowntown, aOutbound,
	bDowntown, bOutbound,
	cDowntown, cOutbound,
	dst,
)
module.exports = Object.assign(all, {
	aDowntown, aOutbound, minimal: [].concat(aDowntown, aOutbound),
	bDowntown, bOutbound, full: [].concat(bDowntown, bOutbound),
	cDowntown, cOutbound,
	dst,
})
