'use strict'

const fta = {
	agency_id: 'FTA',
	agency_name: 'Full Transit Agency',
	agency_url: 'https://fta.example.org/',
	agency_timezone: 'Europe/Warsaw',
	agency_lang: 'de',
	agency_phone: '+49 123 456 789 0',
	agency_fare_url: 'https://fta.example.org/fares.html',
	agency_email: 'contact@fta.example.org'
}

const mta = {
	agency_id: 'MTA',
	agency_name: 'Minimal Transit Agency',
	agency_url: 'https://mta.example.org/',
	agency_timezone: 'Europe/Berlin'
}

module.exports = Object.assign([fta, mta], {
	fta, full: fta,
	mta, minimal: mta
})
