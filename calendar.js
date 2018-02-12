'use strict'

const {feed_start_date, feed_end_date} = require('./feed_info').full

const allDay = {
	service_id: 'all-day',
	monday: '1',
	tuesday: '1',
	wednesday: '1',
	thursday: '1',
	friday: '1',
	saturday: '1',
	sunday: '1',
	start_date: '20190301', // before feed_info.feed_start_date!
	end_date: '20190820' // after feed_info.feed_end_date!
}

const onWorkingDays = {
	service_id: 'on-working-days',
	monday: '1',
	tuesday: '1',
	wednesday: '1',
	thursday: '1',
	friday: '1',
	saturday: '1',
	sunday: '0',
	start_date: '20190308', // after feed_info.feed_start_date
	end_date: '20190720' // before feed_info.feed_end_date
}

const onWeekends = {
	service_id: 'on-weekends',
	monday: '0',
	tuesday: '0',
	wednesday: '0',
	thursday: '0',
	friday: '0',
	saturday: '1',
	sunday: '1',
	start_date: feed_start_date,
	end_date: feed_end_date
}

module.exports = Object.assign([allDay, onWorkingDays, onWeekends], {
	allDay, onWorkingDays, onWeekends
})
