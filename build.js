'use strict'

const {promisify} = require('util')
const {pipeline} = require('stream')
const {exec} = require('child_process')
const toCsv = require('csv-write-stream')
const {createWriteStream} = require('fs')
const sortBy = require('lodash/sortBy')
const path = require('path')
const {writeFile, unlink} = require('fs').promises

const full = require('./full')

const orders = Object.assign(Object.create(null), {
	'agency': ['agency_id'],
	'stops': ['stop_id'],
	'routes': ['route_id'],
	'trips': ['trip_id'],
	'stop_times': ['trip_id', 'stop_sequence'],
	'calendar': ['service_id'],
	'calendar_dates': ['service_id', 'date'],
	'shapes': ['shape_id', 'shape_pt_sequence'],
	'frequencies': ['trip_id', 'start_time'],
})

const pPipeline = promisify(pipeline)
const pExec = promisify(exec)

const writeCsv = async (dest, cols, rows) => {
	const sink = toCsv({headers: cols})
	const task = pPipeline(sink, createWriteStream(dest))

	for (const row of rows) sink.write(row)
	sink.end()

	await task
}

;(async () => {
	for (const set of Object.keys(full)) {
		const data = full[set]

		const rows = Array.isArray(data)
			? (set in orders ? sortBy(data, orders[set]) : data)
			: [data]
		const cols = Array.from(new Set(rows.flatMap(row => Object.keys(row))))

		// write GTFS
		await writeCsv(
			path.join(__dirname, 'gtfs', set + '.txt'),
			cols,
			rows,
		)

		// write JSON
		const dest = path.join(__dirname, 'json', set + '.json')
		await writeFile(dest, JSON.stringify(data))
	}

	try {
		await unlink(path.join(__dirname, 'gtfs.zip'))
	} catch (err) {
		if (err && err.code !== 'ENOENT') throw err
	}
	await pExec('zip -r -D -9 ../gtfs.zip *.txt', {
		cwd: path.join(__dirname, 'gtfs'),
	})
})()
.catch((err) => {
	console.error(err)
	process.exit(1)
})
