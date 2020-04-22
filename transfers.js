'use strict'

const {airport} = require('./stops')

const TIMED = '1'

const pl1 = airport.find(({stop_id}) => stop_id === 'airport-1')
const pl2 = airport.find(({stop_id}) => stop_id === 'airport-2')

// todo: more cases/variants
module.exports = [{
	from_stop_id: pl1.stop_id,
	to_stop_id: pl2.stop_id,
	transfer_type: TIMED,
}]
