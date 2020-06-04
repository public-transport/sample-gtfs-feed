'use strict'

const {ok} = require('assert')
const {b} = require('./routes')
const trips = require('./trips')

const bDowntownOnWorkingDays = trips.find(t => t.trip_id === 'b-downtown-on-working-days')
ok(bDowntownOnWorkingDays, 'trip b-downtown-on-working-days not found')
const bOutboundOnWorkingDays = trips.find(t => t.trip_id === 'b-outbound-on-working-days')
ok(bOutboundOnWorkingDays, 'trip b-outbound-on-working-days not found')

const bDowntownSchoolService = {
	trip_id: bDowntownOnWorkingDays.trip_id,
	start_time: '08:00',
	end_time: '08:59',
	headway_secs: 5 * 60,
	exact_times: '1', // Schedule-based trips with the exact same headway throughout the day.
}
const bOutboundSchoolService = {
	trip_id: bOutboundOnWorkingDays.trip_id,
	start_time: '15:00',
	end_time: '16:00',
	headway_secs: 10 * 60,
	exact_times: '0', // Frequency-based trips.
}

const all = [
	bDowntownOnWorkingDays,
	bOutboundOnWorkingDays,
]
all.full = all.minimal = all
all.bDowntownSchoolService = bDowntownSchoolService
all.bOutboundSchoolService = bOutboundSchoolService
module.exports = all
