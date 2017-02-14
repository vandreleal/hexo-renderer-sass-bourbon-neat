'use strict'

var sass = require('node-sass')
var bourbon = require('bourbon')
var neat = require('bourbon-neat')
var extend = require('util')._extend

module.exports = function (data, options) {
  var self = this
  var themeConfig = self.theme.config || {}

  // support global and theme-specific config
  var userConfig = extend(
    themeConfig.bourbon_neat || {},
    self.config.bourbon_neat || {}
  )

  var config = extend({
    data: data.text,
    file: data.path,
    outputStyle: 'nested',
    sourceComments: false,
    includePaths: [bourbon.includePaths, neat.includePaths]
  }, userConfig)

  try {
    var result = sass.renderSync(config)
    return result.css.toString()
  } catch (error) {
    console.error(error.toString())
    throw error
  }
}
