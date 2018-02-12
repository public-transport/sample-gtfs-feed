'use strict'

const minimal = {
	feed_publisher_name: 'Some Transit Authority',
	feed_publisher_url: 'http://sta.example.org',
	feed_lang: 'de-AT'
}

const full = Object.assign({
	feed_start_date: '20190303',
	feed_end_date: '20190810',
	feed_version: 'third version'
}, minimal)

module.exports = {minimal, full}
