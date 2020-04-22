'use strict'

const airport0 = {
	level_id: 'airport-level-0',
	level_index: 0,
	level_name: 'ground level',
}
const airport1 = {
	level_id: 'airport-level-1',
	level_index: 1,
	level_name: 'platform 1',
}
const airport2 = {
	level_id: 'airport-level-3',
	level_index: 3,
	level_name: 'platform 2',
}

const all = [
	airport0,
	airport1,
	airport2,
]
module.exports = Object.assign(all, {
	airport0,
	airport1,
	airport2,
})
