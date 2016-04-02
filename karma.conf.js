const webpackConfig = require('./webpack')

module.exports = function(config) {
  config.set({

    frameworks: ['jasmine'],

    files: [
    'test/**/*.test.es6'
    ],

    preprocessors: {
      'test/**/*.test.es6': ['webpack']
    },
    
    webpack: webpackConfig,

    reporters: ['progress', 'coverage'],

    coverageReporter: {
      reporters: [
        { type: 'cobertura' },
        { type: 'lcov' },
        { type: 'text' },
        { type: 'text-summary' }
      ],
      dir: 'coverage'
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Include timeout because of rsync
    autoWatchBatchDelay: 800
  })
}
