module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'plugin/node_modules/underscore/underscore-min.js',
            'plugin/node_modules/q/q.js',
            'plugin/node_modules/jquery/dist/jquery.js',

            'plugin/core/config/env.js',
            'plugin/core/modules/**/*.js',
            'plugin/core/scripts/modifiers/extendedActivityData/views/AbstractDataView.js',
            'plugin/core/scripts/**/*.js',

            'specs/**/*.js',
            'specs/fixtures/**/*.json'
        ],
        exclude: [
            'plugin/core/scripts/Background.js',
            'plugin/core/scripts/Constants.js',
            'plugin/core/scripts/Content.js',
            'plugin/core/modules/jquery.appear.js',
            'plugin/core/scripts/ReleaseNotes.js'
        ],
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