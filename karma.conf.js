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
            '**/*.map',
            'plugin/core/scripts/SystemJS.*.js',
            'plugin/core/scripts/interfaces/*.js',
            'plugin/core/scripts/Background.js',
            'plugin/core/scripts/Content.js'
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
                    'traceur': './node_modules/traceur/dist/commonjs/traceur.js', // karma-systemjs required
                    'systemjs': './node_modules/systemjs/dist/system.js', // karma-systemjs required
                    'npm@plugin:': './base/plugin/node_modules/',
                },
                map: {
                    'q': 'npm@plugin:q/q.js',
                    'jquery': 'npm@plugin:jquery/dist/jquery.js',
                    'underscore': 'npm@plugin:underscore/underscore-min.js',
                    'chart.js': 'npm@plugin:chart.js/dist/Chart.bundle.js',
                    'd3': 'npm@plugin:d3/d3.js'
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