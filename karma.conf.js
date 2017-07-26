module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        // browsers: ['Chrome'],
        frameworks: ['systemjs', 'jasmine', 'promise'],
        plugins: ['karma-jasmine', 'karma-systemjs', 'karma-promise', 'karma-phantomjs-launcher', 'karma-json-fixtures-preprocessor'],
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
        ],
        exclude: [
            // 'dist/core/scripts/Background.js',
            // 'dist/core/scripts/Constants.js',
            // 'dist/core/scripts/Content.js',
            // 'dist/core/modules/jquery.appear.js',
            // 'dist/core/scripts/ReleaseNotes.js'
        ],
        systemjs: {
            // Path to your SystemJS configuration file
            // configFile: './specs/system.conf.js', // TODO

            // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
            serveFiles: [
                // 'lib/**/*.js' // TODO

                // 'node_modules/karma-json-fixtures-preprocessor/*.js',
            ],
            // SystemJS configuration specifically for tests, added after your config file.
            // Good for adding test libraries and mock modules
            config: {

                paths: {
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
                    'q': 'npm:q/q.js',
                    'jquery': 'npm:jquery/dist/jquery.js',
                    'underscore': 'npm:underscore/underscore-min.js',
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
        singleRun: true,
        // captureTimeout: 2000,
        // browserDisconnectTimeout: 10000,
        // browserDisconnectTolerance: 3,
        // browserNoActivityTimeout: 900000,
        browserConsoleLogOptions: {
            // path: './specs.log',
            terminal: false
        }
    });
};