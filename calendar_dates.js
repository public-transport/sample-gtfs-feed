'use strict'

const {allDay, onWorkingDays, onWeekends} = require('./calendar')

const applyToServices = (services, dates, type) => {
	const exceptions = []
	for (let service of services) {
		for (let date of dates) {
			exceptions.push({
				service_id: service.service_id,
				date,
				exception_type: type
			})
		}
	}
	return exceptions
}

const laborDay = applyToServices([allDay, onWorkingDays], ['20190501'], '2')

const moreWorkDay = applyToServices([allDay, onWeekends], ['20190615'], '1')

const oneWeekNoService = [].concat(
	applyToServices([allDay], [
		'20190715',
		'20190716',
		'20190717',
		'20190718',
		'20190719',
		'20190720',
		'20190721'
	], '2'),
	applyToServices([onWorkingDays], [
		'20190715',
		'20190716',
		'20190717',
		'20190718',
		'20190719'
	], '2'),
	applyToServices([onWeekends], [
		'20190720',
		'20190721'
	], '2')
)

const all = [].concat(laborDay, moreWorkDay, oneWeekNoService)
module.exports = Object.assign(all, {
	laborDay, moreWorkDay, oneWeekNoService
})
