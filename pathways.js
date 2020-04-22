'use strict'

const {airport} = require('./stops')

const WALKWAY = '1'
const STAIRS = '2'
const ESCALATOR = '4'
const ELEVATOR = '5'

const entrance = airport.find(({stop_id}) => stop_id === 'airport-entrance')
const pl1 = airport.find(({stop_id}) => stop_id === 'airport-1')
const pl1AccessNode = airport.find(({stop_id}) => stop_id === 'airport-1-access')
const pl2Boarding = airport.find(({stop_id}) => stop_id === 'airport-2-boarding')
const pl2AccessNode = airport.find(({stop_id}) => stop_id === 'airport-2-access')

let i = 0
const id = () => i++ + ''

// not wheelchair-accessible
const airportEntranceToPl1 = [{
	id: id(),
	from_stop_id: entrance.stop_id,
	to_stop_id: pl1AccessNode.stop_id,
	pathway_mode: ESCALATOR,
	is_bidirectional: '1',
}, {
	id: id(),
	from_stop_id: pl1AccessNode.stop_id,
	to_stop_id: pl1.stop_id,
	pathway_mode: STAIRS,
	is_bidirectional: '1',
}]

// wheelchair-accessible
const airportEntranceToPl2Boarding = [{
	id: id(),
	from_stop_id: entrance.stop_id,
	to_stop_id: pl2AccessNode.stop_id,
	pathway_mode: WALKWAY,
	is_bidirectional: '1',
	length: 200,
	traversal_time: 200,
	max_slope: 0.06,
	min_width: 2,
	signposted_as: 'towards platform 2 boarding',
	reversed_signposted_as: 'main hall',
}, {
	id: id(),
	from_stop_id: pl2AccessNode.stop_id,
	to_stop_id: pl2Boarding.stop_id,
	pathway_mode: ELEVATOR,
	is_bidirectional: '1',
}]

const all = [].concat(
	airportEntranceToPl1,
	airportEntranceToPl2Boarding,
)
module.exports = Object.assign(all, {
	airportEntranceToPl1,
	airportEntranceToPl2Boarding,
})
