module.exports = function (config) {
    config.set({
        basePath: '.',
        browsers: [
            'PhantomJS',
            // 'Chrome'
        ],
        frameworks: ['systemjs', 'jasmine', 'promise'],
        plugins: ['karma-jasmine', 'karma-systemjs', 'karma-promise', 'karma-phantomjs-launcher', 'karma-chrome-launcher', 'karma-json-fixtures-preprocessor'],
        files: [
            'plugin/node_modules/q/q.js',
            'plugin/node_modules/jquery/dist/jquery.js',
            'plugin/node_modules/underscore/underscore-min.js',
            'plugin/node_modules/chart.js/dist/Chart.bundle.js',
            'plugin/node_modules/d3/d3.js',
            'plugin/core/**/*.js',
            'specs/**/*.js',
            'specs/fixtures/**/*.json'
        ],
        exclude: [
            'plugin/core/scripts/Main.js', // TODO Be deleted?
            'plugin/core/scripts/SystemJS.*.js',
            'plugin/core/modules/jquery.appear.js',
            'plugin/core/scripts/interfaces/*.js',
            'plugin/core/scripts/Background.js',
            'plugin/core/scripts/Content.js',
            '**/*.map'
        ],
        systemjs: {
            serveFiles: [], // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
            config: { // SystemJS configuration
                packages: {
                    'plugin/core/': {
                        format: 'cjs'
                    },
                    'specs/': {
                        format: 'cjs'
                    }
                },
                paths: {
                    // 'npm:': './node_modules/',

                    // '/': '/base/',

                    // '/': '/base/'

                    'traceur': './node_modules/traceur/dist/commonjs/traceur.js',
                    'systemjs': './node_modules/systemjs/dist/system.js',

                    // 'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js', // TODO del?
                    // 'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js', // TODO del?
                    // 'system-polyfills': './node_modules/systemjs/dist/system-polyfills.js', // TODO del?
                    // 'es6-module-loader': './node_modules/es6-module-loader/dist/es6-module-loader.js', // TODO del?

                    'phantomjs-polyfill': './node_modules/phantomjs-polyfill/bind-polyfill.js'


                },

                map: {
                    // 'plugin-babel': './base/node_modules/systemjs-plugin-babel/plugin-babel.js',
                    // 'systemjs-babel-build': './base/node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
                    // 'system-polyfills': './base/node_modules/systemjs/dist/system-polyfills.js',
                    // 'es6-module-loader': './base/node_modules/es6-module-loader/dist/es6-module-loader.js',
                    // 'json_fixtures': './base/node_modules/karma-json-fixtures-preprocessor/json_fixtures.js',

                    // 'es6-promise': './base/node_modules/es6-promise/dist/es6-promise.js',
                    // 'promise-polyfill': '/base/node_modules/promise-polyfill/promise.js',

                    'phantomjs-polyfill': './base/node_modules/phantomjs-polyfill/bind-polyfill.js',

                    // Npm
                    'q': './base/plugin/node_modules/q/q.js',
                    'jquery': './base/plugin/node_modules/jquery/dist/jquery.js',
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
        singleRun: true,
        browserConsoleLogOptions: {
            // path: './specs.log',
            terminal: false
        }
    });
};