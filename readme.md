# sample-gtfs-feed

**An imaginary [GTFS Schedule](https://gtfs.org/schedule/) dataset used for testing.**

[![npm version](https://img.shields.io/npm/v/sample-gtfs-feed.svg)](https://www.npmjs.com/package/sample-gtfs-feed)
![ISC-licensed](https://img.shields.io/github/license/public-transport/sample-gtfs-feed.svg)
[![support me via GitHub Sponsors](https://img.shields.io/badge/support%20me-donate-fa7664.svg)](https://github.com/sponsors/derhuerst)
[![chat with me on Twitter](https://img.shields.io/badge/chat%20with%20me-on%20Twitter-1da1f2.svg)](https://twitter.com/derhuerst)


## Installing

```shell
npm install sample-gtfs-feed
```


## Usage

Using following GTFS tables, `sample-gtfs-feed` forms a GTFS feed for a simple fictional transit network:

- [`agency`](https://https://gtfs.org/schedule/reference/#agencytxt)
- [`stops`](https://https://gtfs.org/schedule/reference/#stopstxt)
- [`routes`](https://https://gtfs.org/schedule/reference/#routestxt)
- [`trips`](https://https://gtfs.org/schedule/reference/#tripstxt)
- [`stop_times`](https://https://gtfs.org/schedule/reference/#stop_timestxt)
- [`calendar`](https://https://gtfs.org/schedule/reference/#calendartxt)
- [`calendar_dates`](https://https://gtfs.org/schedule/reference/#calendar_datestxt)
- [`frequencies`](https://https://gtfs.org/schedule/reference/#frequenciestxt)
- [`transfers`](https://https://gtfs.org/schedule/reference/#transferstxt)
- [`pathways`](https://https://gtfs.org/schedule/reference/#pathwaystxt)
- [`levels`](https://https://gtfs.org/schedule/reference/#levelstxt)
- [`feed_info`](https://https://gtfs.org/schedule/reference/#feed_infotxt)

### plain CSV files

The `sample-gtfs-feed` npm package contains plain CSV files, which you can process like any GTFS feed.

To get the path to one of these files in Node.js, use `require.resolve`:

```js
fs.readFileSync(require.resolve('sample-gtfs-feed/gtfs/agency.txt'), {
	encoding: 'utf8'
})
```

To get the path from the command line, use `node -p`:

```sh
cat $(node -p 'require.resolve("sample-gtfs-feed/gtfs/agency.txt")')
```

```csv
agency_id,agency_name,agency_url,agency_timezone,agency_lang,agency_phone,agency_fare_url,agency_email
FTA,Full Transit Agency,https://fta.example.org/,Europe/Warsaw,de,+49 123 456 789 0,https://fta.example.org/fares.html,contact@fta.example.org
MTA,Minimal Transit Agency,https://mta.example.org/,Europe/Berlin,,,,
```

There's also a `.zip` file of these plain CSV files available as `sample-gtfs-feed/gtfs.zip`.

### JSON files

```shell
cat $(node -p 'require.resolve("sample-gtfs-feed/json/agency.json")')
```

### JS objects

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


## Contributing

If you have a question or have difficulties using `sample-gtfs-feed`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/public-transport/sample-gtfs-feed/issues).
