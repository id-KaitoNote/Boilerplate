'use strict'

const { src, dest, watch, series, parallel } = require('gulp')

const configPath = require('../../config-path')

const del = require('del')

const clean = () => {
  return del(`${configPath.dirs.clean}`)
}

module.exports = clean
