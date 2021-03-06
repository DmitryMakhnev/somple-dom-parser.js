// Karma configuration
// Generated on Sun Jan 25 2015 20:54:07 GMT+0300 (MSK)

var path = require('path');
var webpack = require('webpack');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'tests/specs/simple-dom.js',
            'tests/specs/modules/nodes.js',
            'tests/specs/modules/parse/defaultTesting.exports.simpleDOM.parse/'
                + 'defaultTesting.exports.simpleDOM.parse.js',
            'tests/specs/modules/parse/defaultTesting.exports.simpleDOM.parse/'
                + 'contextOfParse.js',
            'tests/specs/modules/parse/defaultTesting.exports.simpleDOM.parse/'
                + 'microhelpers/**/*.js',
            'tests/specs/modules/parse/defaultTesting.exports.simpleDOM.parse/'
                + 'builders/**/*.js',
            'tests/specs/modules/parse/defaultTesting.exports.simpleDOM.parse/'
                + 'processings/**/*.js',
            'tests/specs/modules/parse/parse.js'
            //,
            //'tests/specs/modules/selectors/parseSelector.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'tests/specs/simple-dom.js': ['webpack', 'sourcemap'],
            'tests/specs/modules/nodes.js': ['webpack', 'sourcemap'],
            'tests/specs/modules/parse/defaultTesting.exports.simpleDOM.parse/defaultTesting.exports.simpleDOM.parse.js': ['webpack', 'sourcemap'],
            'tests/specs/modules/parse/defaultTesting.exports.simpleDOM.parse/contextOfParse.js': ['webpack', 'sourcemap'],
            'tests/specs/modules/parse/defaultTesting.exports.simpleDOM.parse/microhelpers/**/*.js': ['webpack', 'sourcemap'],
            'tests/specs/modules/parse/defaultTesting.exports.simpleDOM.parse/builders/**/*.js': ['webpack', 'sourcemap'],
            'tests/specs/modules/parse/defaultTesting.exports.simpleDOM.parse/processings/**/*.js': ['webpack', 'sourcemap'],
            'tests/specs/modules/parse/parse.js': ['webpack', 'sourcemap']
            //,
            //'tests/specs/modules/selectors/parseSelector.js': ['webpack', 'sourcemap']
        },

        webpack: {
            devtool: 'inline-source-map',
            resolve: {
                root: [
                    path.join(__dirname, 'bower_components'),
                    path.join(__dirname, 'src')
                ]
            },
            plugins: [
                new webpack.ResolverPlugin(
                    new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
                )
            ]
        },

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS2'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
