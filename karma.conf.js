module.exports = function (config) {
    config.set({
        basePath: '.',
        browsers: [
            // 'PhantomJS',
            'Chrome'
        ],
        frameworks: ['systemjs', 'jasmine', 'promise'],
        plugins: ['karma-jasmine', 'karma-systemjs', 'karma-promise', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-json-fixtures-preprocessor'],
        files: [
            // './node_modules/es6-promise/dist/es6-promise.js',
            // './node_modules/promise-polyfill/promise.js'
            // './node_modules/es6-promise/dist/es6-promise.js'

            // promise-polyfill:
            // files: ['./node_modules/promise-polyfill/promise.js']
            // 'dist/core/config/env.js',
            // 'dist/core/modules/**/*.js',
            // 'dist/node_modules/underscore/underscore-min.js',
            // 'dist/node_modules/q/q.js',
            // 'dist/node_modules/jquery/dist/jquery.js',
            // 'dist/core/scripts/modifiers/extendedActivityData/views/AbstractDataView.js',
            // 'dist/core/scripts/**/*.js',
            // 'specs/**/*.js',
            // 'specs/fixtures/**/*.json'

            // 'dist/core/**/*.js',
            // 'specs/**/*.js',

            ////////// My test://////////
            // Libs

            'dist/node_modules/q/q.js',
            // 'dist/node_modules/jquery/dist/jquery.js',
            'dist/node_modules/underscore/underscore-min.js',
            'dist/node_modules/chart.js/dist/Chart.bundle.js',
            'dist/node_modules/d3/d3.js',
            // 'dist/node_modules/chart.js/dist/Chart.bundle.js',
            // 'dist/node_modules/fancybox/dist/js/jquery.fancybox.pack.js',
            // 'dist/node_modules/qrcode-js-package/qrcode.min.js',

            // 'dist/node_modules/geodesy/dms.js',
            // 'dist/node_modules/geodesy/latlon-spherical.js',
            // 'dist/node_modules/file-saver/FileSaver.min.js',
            // 'dist/core/modules/**/*.js',

            //....
            // 'dist/core/scripts/UserSettings.js',
            // 'dist/core/scripts/Helper.js',


            // 'core/modules/StorageManager.js',
            // 'core/modules/jquery.appear.js',

            // 'dist/core/modules/**/*.js',
            'dist/core/**/*.js',
            'specs/fixtures/**/*.json',
            // 'specs/**/*.js'
            'specs/Follow.*.js'

        ],
        exclude: [
            'dist/core/scripts/Main.js', // TODO Be deleted?

            'dist/core/scripts/SystemJS.*.js',

            'dist/core/modules/jquery.appear.js',

            'dist/core/scripts/interfaces/*.js',
            // 'dist/core/modules/StorageManager.js',
            // 'dist/core/scripts/Constants.js',
            'dist/core/scripts/Background.js',
            'dist/core/scripts/Content.js',
            // 'dist/core/scripts/Follow.js',
            // 'dist/core/scripts/ReleaseNotes.js'
        ],
        systemjs: {
            // Path to your SystemJS configuration file
            // configFile: './specs/system.conf.js', // TODO
            baseURL: '.',
            // defaultJSExtensions: true,
            // defaultExtension: 'js',
            // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
            serveFiles: [
                // 'lib/**/*.js' // TODO

                // 'node_modules/karma-json-fixtures-preprocessor/*.js',
            ],
            // SystemJS configuration specifically for tests, added after your config file.
            // Good for adding test libraries and mock modules
            config: {
                packages: {
                    'dist/': {
                        format: 'cjs'
                    }
                },
                paths: {
                    // 'npm:': './node_modules/',

                    'traceur': './node_modules/traceur/dist/commonjs/traceur.js',
                    'systemjs': './node_modules/systemjs/dist/system.js',

                    'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js', // TODO del?
                    'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js', // TODO del?
                    // 'systemjs': './node_modules/systemjs/dist/system.js',
                    'system-polyfills': './node_modules/systemjs/dist/system-polyfills.js', // TODO del?
                    'es6-module-loader': './node_modules/es6-module-loader/dist/es6-module-loader.js', // TODO del?
                    // 'es6-promise': './node_modules/es6-promise/dist/es6-promise.js',
                    // 'promise-polyfill': '/node_modules/promise-polyfill/promise.js',

                    'phantomjs-polyfill': './node_modules/phantomjs-polyfill/bind-polyfill.js'

                    // 'json_fixtures': './node_modules/karma-json-fixtures-preprocessor/json_fixtures.js',

                },

                map: {
                    'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
                    'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
                    'system-polyfills': './node_modules/systemjs/dist/system-polyfills.js',
                    'es6-module-loader': './node_modules/es6-module-loader/dist/es6-module-loader.js',
                    'json_fixtures': './node_modules/karma-json-fixtures-preprocessor/json_fixtures.js',

                    // 'es6-promise': './node_modules/es6-promise/dist/es6-promise.js',
                    // 'promise-polyfill': '/node_modules/promise-polyfill/promise.js',

                    'phantomjs-polyfill': './node_modules/phantomjs-polyfill/bind-polyfill.js',

                    // Npm
                    'q': './base/dist/node_modules/q/q.js',
                    'jquery': './base/dist/node_modules/jquery/dist/jquery.js',
                    'underscore': './base/dist/node_modules/underscore/underscore-min.js',
                    'chart.js': './base/dist/node_modules/chart.js/dist/Chart.bundle.js',
                    'd3': './base/dist/node_modules/d3/d3.js',
                }

            }
        },
        preprocessors: {
            'specs/fixtures/**/*.json': ['json_fixtures']
        },
        jsonFixturesPreprocessor: {
            // strip this from the file path \ fixture name
            stripPrefix: 'specs/',
            // strip this to the file path \ fixture name
            prependPrefix: '',
            // change the global fixtures variable name
            variableName: '__fixtures__',
            // camelize fixture filenames (e.g 'fixtures/aa-bb_cc.json' becames __fixtures__['fixtures/aaBbCc'])
            camelizeFilenames: true,
            // transform the filename
            transformPath: function (path) {
                return path + '.js';
            }
        },
        // singleRun: true,
        // captureTimeout: 2000,
        // browserDisconnectTimeout: 10000,
        // browserDisconnectTolerance: 3,
        // browserNoActivityTimeout: 900000,
        browserConsoleLogOptions: {
            // path: './specs.log',
            terminal: true
        }
    });
};