'use strict'

/**
 * Dependencies
 */

const scrape = require('./scrape')
const cheerio = require('cheerio')
const meow = require('meow')
const showHelp = require('../helpers/showHelp')

/**
 * Parse args
 */

const cli = meow(`
  Usage
    $ cast google-images QUERY
`, {
  description: 'Search and download Google Images.'
})

 /**
 * Define script
 */

async function google_images(query=null) {
  showHelp(cli, [(!query && cli.input.length < 2)])

  if (!query) {
    query = cli.input[1]
  }

  try {
    const targetUrl = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`

    // Scrape images from search.
    const result = await scrape({
      url: targetUrl,
      selector: 'div#search img'
    })
    console.log('result', result)

    // TODO Parse all image URLs on page.
    // TODO Download all images.
  } catch (err) {
    console.error(err)
  }
}

/**
 * Export script
 */

module.exports = google_images
