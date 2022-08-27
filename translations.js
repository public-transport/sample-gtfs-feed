'use strict'

const {fta} = require('./agency')
const {airport} = require('./stops')
const {b} = require('./routes')
const {bDowntown, bOutbound} = require('./trips')
const {forBOutbound} = require('./stop_times')

const airportEntrance = airport.find(({stop_id}) => stop_id === 'airport-entrance')
const airportPl1 = airport.find(({stop_id}) => stop_id === 'airport-1')
const bDowntownOnWeekends = bDowntown.find(({trip_id}) => trip_id === 'b-downtown-on-weekends')
const bOutboundOnWeekends = bOutbound.find(({trip_id}) => trip_id === 'b-outbound-on-weekends')

const ftaTranslated = {
	table_name: 'agency',
	field_name: 'agency_url',
	language: 'de-DE',
	translation: 'https://fta.example.org/?locale=de-DE',
	record_id: fta.agency_id,
	record_sub_id: null,
	field_value: null,
}

const airportEntranceTranslated = {
	table_name: 'stops',
	field_name: 'stop_name',
	language: 'de-DE',
	translation: 'Eingang',
	record_id: airportEntrance.stop_id,
	record_sub_id: null,
	field_value: null,
}
const airportPl1Translated = {
	table_name: 'stops',
	field_name: 'stop_name',
	language: 'de-DE',
	translation: 'Gleis 1',
	record_id: airportPl1.stop_id,
	record_sub_id: null,
	field_value: null,
}

const bTranslated = [{
	table_name: 'routes',
	field_name: 'route_long_name',
	language: 'de-AT',
	translation: 'Tram-Linie Charles Babbage',
	record_id: null,
	record_sub_id: null,
	fiedl_value: 'Charles Babbage Tram Line',
}, {
	table_name: 'routes',
	field_name: 'route_desc',
	language: 'de-AT',
	translation: 'Verbindet das Stadtzentrum mit dem Flughafen.',
	record_id: b.route_id,
	record_sub_id: null,
	fiedl_value: null,
}]

const bDowntownOnWeekendsTranslated = {
	table_name: 'trips',
	field_name: 'trip_headsign',
	language: 'de-DE',
	translation: 'Babbage (Richtung Stadt)',
	record_id: bDowntownOnWeekends.trip_id,
	record_sub_id: null,
	field_value: null,
}
const bOutboundOnWeekendsTranslated = {
	table_name: 'trips',
	field_name: 'trip_headsign',
	language: 'de-DE',
	translation: 'Babbage (auswärts)',
	record_id: null,
	record_sub_id: null,
	field_value: bDowntownOnWeekends.trip_headsign,
}

const forBOutboundOnWeekends0 = forBOutbound.find(({trip_id}) => trip_id === bOutboundOnWeekends.trip_id)
const forBOutboundOnWeekends0Translated = {
	table_name: 'stop_times',
	field_name: 'stop_headsign',
	language: 'de-DE',
	translation: 'hAllo',
	record_id: bOutboundOnWeekends.trip_id,
	record_sub_id: forBOutboundOnWeekends0.stop_sequence,
	field_value: null,
}

const airportLevelsTranslated = [{
	table_name: 'levels',
	field_name: 'level_name',
	language: 'de-DE',
	translation: 'Erdgeschoss',
	record_id: 'airport-level-0',
	record_sub_id: null,
	field_value: null,
}, {
	table_name: 'levels',
	field_name: 'level_name',
	language: 'de-DE',
	translation: 'Gleis 1',
	record_id: null,
	record_sub_id: null,
	field_value: 'platform 1',
}, {
	table_name: 'levels',
	field_name: 'level_name',
	language: 'de-DE',
	translation: 'Gleis 2',
	record_id: 'airport-level-3',
	record_sub_id: null,
	field_value: null,
}]

const all = [].concat(
	ftaTranslated,
	airportEntranceTranslated,
	airportPl1Translated,
	bTranslated,
	bDowntownOnWeekendsTranslated,
	bOutboundOnWeekendsTranslated,
	forBOutboundOnWeekends0Translated,
	airportLevelsTranslated,
)
module.exports = Object.assign(all, {
	ftaTranslated,
	airportEntranceTranslated,
	airportPl1Translated,
	bTranslated,
	bDowntownOnWeekendsTranslated,
	bOutboundOnWeekendsTranslated,
	forBOutboundOnWeekends0Translated,
	airportLevelsTranslated,
})
