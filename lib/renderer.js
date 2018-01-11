'use strict'

var sass = require('node-sass')
var bourbon = require('bourbon')
var neat = require('bourbon-neat')

// includes Bourbon and Neat paths to node-sass config.
module.exports = function (data, options) {
  var self = this
  var themeConfig = self.theme.config || {}

  // support global and theme-specific config
  var userConfig = Object.assign(
    themeConfig.bourbon_neat || {},
    self.config.bourbon_neat || {}
  )

  var config = Object.assign({
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
