'use strict'

const path = require('path')
const toCsv = require('csv-write-stream')
const pump = require('pump')
const fs = require('fs')

const full = require('./full')

const showError = (err) => {
	if (!err) return null
	console.error(err)
	process.exit(1)
}

for (let set of Object.keys(full)) {
	const data = full[set]

	// determine columns
	let cols = undefined
	if (Array.isArray(data)) {
		cols = new Set()
		for (const item of data) {
			for (const col of Object.keys(item)) cols.add(col)
		}
		cols = Array.from(cols.values())
	}

	// write GTFS
	const sink = toCsv({headers: cols})
	pump(
		sink,
		fs.createWriteStream(path.join(__dirname, 'gtfs', set + '.txt')),
		showError
	)
	if (Array.isArray(data)) {
		for (let item of data) {
			sink.write(item)
		}
	} else sink.write(data)
	sink.end()

	// write JSON
	const dest = path.join(__dirname, 'json', set + '.json')
	fs.writeFile(dest, JSON.stringify(data), showError)
}
