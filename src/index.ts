// Add support for source-maps.
import 'source-map-support/register'

// Load bluebird as the global promise library.
import * as bluebird from 'bluebird'
global.Promise = bluebird

// Makes the script crash on unhandled rejections instead of silently ignoring them.
process.on('unhandledRejection', (err: Error) => {
	throw err
})

// Load environment variables.
import 'dotenv/config'

// Setup the error reporter.
import * as raven from 'raven'
if (process.env.NODE_ENV === 'production') {
	raven.config(process.env.SENTRY_DSN).install()
}

console.log('Hello World!') // tslint:disable-line no-console
