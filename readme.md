# sample-gtfs-feed

**An imaginary [GTFS](https://developers.google.com/transit/gtfs/) data set used for testing.**

[![npm version](https://img.shields.io/npm/v/sample-gtfs-feed.svg)](https://www.npmjs.com/package/sample-gtfs-feed)
![ISC-licensed](https://img.shields.io/github/license/public-transport/sample-gtfs-feed.svg)
[![chat on gitter](https://badges.gitter.im/public-transport/Lobby.svg)](https://gitter.im/public-transport/Lobby)


## Installing

```shell
npm install sample-gtfs-feed
```


## Usage

```js
require('sample-gtfs-feed/agency')
```

```js
[{
	agency_id: 'FTA',
	agency_name: 'Full Transit Agency',
	agency_url: 'https://fta.example.org/',
	agency_timezone: 'Europe/Warsaw',
	agency_lang: 'de',
	agency_phone: '+49 123 456 789 0',
	agency_fare_url: 'https://fta.example.org/fares.html',
	agency_email: 'contact@fta.example.org'
}, {
	agency_id: 'MTA',
	agency_name: 'Minimal Transit Agency',
	agency_url: 'https://mta.example.org/',
	agency_timezone: 'Europe/Berlin'
}]
```

```js
fs.readFileSync(require.resolve('sample-gtfs-feed/csv/agency.csv'), {
	encoding: 'utf8'
})
```

```csv
agency_id,agency_name,agency_url,agency_timezone,agency_lang,agency_phone,agency_fare_url,agency_email
FTA,Full Transit Agency,https://fta.example.org/,Europe/Warsaw,de,+49 123 456 789 0,https://fta.example.org/fares.html,contact@fta.example.org
MTA,Minimal Transit Agency,https://mta.example.org/,Europe/Berlin,,,,
```

If you want to use JSON, use `sample-gtfs-feed/json/agency.json`.


## Contributing

If you have a question or have difficulties using `sample-gtfs-feed`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/public-transport/sample-gtfs-feed/issues).
