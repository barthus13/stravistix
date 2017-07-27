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
            // 'plugin/core/config/env.js',
            // 'plugin/core/modules/**/*.js',
            // 'plugin/node_modules/underscore/underscore-min.js',
            // 'plugin/node_modules/q/q.js',
            // 'plugin/node_modules/jquery/dist/jquery.js',
            // 'plugin/core/scripts/modifiers/extendedActivityData/views/AbstractDataView.js',
            // 'plugin/core/scripts/**/*.js',
            // 'specs/**/*.js',
            // 'specs/fixtures/**/*.json'

            // 'plugin/core/**/*.js',
            // 'specs/**/*.js',

            ////////// My test://////////
            // Libs

            'plugin/node_modules/q/q.js',
            // 'plugin/node_modules/jquery/dist/jquery.js',
            'plugin/node_modules/underscore/underscore-min.js',
            'plugin/node_modules/chart.js/dist/Chart.bundle.js',
            'plugin/node_modules/d3/d3.js',
            // 'plugin/node_modules/chart.js/dist/Chart.bundle.js',
            // 'plugin/node_modules/fancybox/dist/js/jquery.fancybox.pack.js',
            // 'plugin/node_modules/qrcode-js-package/qrcode.min.js',

            // 'plugin/node_modules/geodesy/dms.js',
            // 'plugin/node_modules/geodesy/latlon-spherical.js',
            // 'plugin/node_modules/file-saver/FileSaver.min.js',
            // 'plugin/core/modules/**/*.js',

            //....
            // 'plugin/core/scripts/UserSettings.js',
            // 'plugin/core/scripts/Helper.js',

            // TODO To continue... Move specs/ inside plugin/ ... good luck !

            // 'core/modules/StorageManager.js',
            // 'core/modules/jquery.appear.js',

            // 'plugin/core/modules/**/*.js',
            'plugin/core/**/*.js',
            'specs/fixtures/**/*.json',
            // 'specs/**/*.js'
            'specs/Follow.*.js'

        ],
        exclude: [
            'plugin/core/scripts/Main.js', // TODO Be deleted?

            'plugin/core/scripts/SystemJS.*.js',

            'plugin/core/modules/jquery.appear.js',

            'plugin/core/scripts/interfaces/*.js',
            // 'plugin/core/modules/StorageManager.js',
            // 'plugin/core/scripts/Constants.js',
            'plugin/core/scripts/Background.js',
            'plugin/core/scripts/Content.js',
            // 'plugin/core/scripts/Follow.js',
            // 'plugin/core/scripts/ReleaseNotes.js'
        ],
        systemjs: {
            // Path to your SystemJS configuration file
            // configFile: './specs/system.conf.js', // TODO
            // baseURL: '../base',
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
                    'plugin/core/': {
                        format: 'cjs'
                    }
                },
                paths: {
                    // 'npm:': './node_modules/',

                    // '/': '/base/',

                    // '/': '/base/'

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
                    'q': './base/plugin/node_modules/q/q.js',
                    // 'jquery': './base/plugin/node_modules/jquery/dist/jquery.js',
                    'underscore': './base/plugin/node_modules/underscore/underscore-min.js',
                    'chart.js': './base/plugin/node_modules/chart.js/dist/Chart.bundle.js',
                    'd3': './base/plugin/node_modules/d3/d3.js',
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