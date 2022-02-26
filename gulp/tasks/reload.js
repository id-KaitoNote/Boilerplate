'use strict'

const browserSync = require('browser-sync')

const reload = (done) => {
  browserSync.reload()
}

module.exports = reload
