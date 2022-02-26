'use strict'

const { src, dest, watch, series, parallel } = require('gulp')

const configPath = require('../../config-path')

const ejs = require('gulp-ejs')
const rename = require('gulp-rename')
const plumber = require('gulp-plumber')

const compileEjs = (done) => {
  src(`${configPath.dirs.ejs.src}`)
    .pipe(plumber())
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(dest(`${configPath.dirs.ejs.dist}`))
  done()
}

module.exports = compileEjs
