SystemJS.config({
    baseURL: 'chrome-extension://' + chrome.runtime.id + '/',
    packages: {

        // './App': {
        //     format: 'cjs',
        //     defaultExtension: 'js',
        // },
        // './Config': {
        //     format: 'cjs',
        //     defaultExtension: 'js',
        // },
        // './controllers': {
        //     format: 'cjs',
        //     defaultExtension: 'js',
        // },
        '../app': {
            format: 'cjs',
            defaultExtension: 'js',
        },
        '../../core/': {
            format: 'cjs'
        }
    },
    paths: {
        'npm:': '../../node_modules/',
    },
    // defaultExtension : true,
    map: {
        'angular': 'npm:angular/angular.js',
        'ngRoute': 'npm:angular-route/angular-route.js',
        'ngSanitize': 'npm:angular-sanitize/angular-sanitize.js',
        'ngAnimate': 'npm:angular-animate/angular-animate.js',
        'ngAria': 'npm:angular-aria/angular-aria.js',
        'ngMaterial': 'npm:angular-material/angular-material.js',
        'angular-material-icons': 'npm:angular-material-icons/angular-material-icons.js',
        'md.data.table': 'npm:angular-material-data-table/dist/md-data-table.min.js',
        'd3': 'npm:d3/d3.js',
        'nvd3': 'npm:angular-nvd3/dist/angular-nvd3.min.js',
        'nvd3Src': 'npm:nvd3/build/nv.d3.min.js',
        'moment': 'npm:moment/moment.js',
        'angularMoment': 'npm:angular-moment/angular-moment.js',
        'underscore': 'npm:underscore/underscore-min.js',
        'file-saver': 'npm:file-saver/FileSaver.min.js',

        'q': 'npm:q/q.js', // For Helper.ts


        // // Npm
        // 'css': 'npm:systemjs-plugin-css/css.js',
        // 'chart.js': 'npm:chart.js/dist/Chart.bundle.js',
        // 'd3': 'npm:d3/d3.js',
        // 'q': 'npm:q/q.js',
        // 'jquery': 'npm:jquery/dist/jquery.js',
        // 'dms': 'npm:geodesy/dms.js',
        // 'sphericalLatLon': 'npm:geodesy/latlon-spherical.js',
        // 'underscore': 'npm:underscore/underscore-min.js',
        // 'fancybox': 'npm:fancybox/dist/js/jquery.fancybox.pack.js',
        //
        // // Custom modules
        // 'jqueryAppear': 'custom:jquery.appear.js',
        //
        // // Css
        // 'fancybox.css': 'npm:fancybox/dist/css/jquery.fancybox.css',
        // 'core.css': 'core/css/core.css',
    },
    // packages: {
    // 'core': {
    //     format: 'cjs'
    // },
    // 'npm:geodesy': {
    //     format: 'cjs'
    // }
    // "ngRoute": {main: "index.js", defaultExtension: "js"},

    // },
    // depCache: {
    //     'angular-route': ['angular'], // moduleA depends on moduleB
    //     // moduleB: ['moduleC'] // moduleB depends on moduleC
    // },
    meta: {
        'angular': {
            format: 'global',
            exports: 'angular'
        },

        // 'ngRoute': {
        //     format: 'global',
        //     exports: 'angular',
        //     // 'deps': [
        //     //     "angular"
        //     // ]
        // }


    }

    // bundles: {
    //     stxBundle: ['jqueryAppear', 'geodesy']
    // },
    // depCache: {
    //     // bundleA: ['jqueryAppear', 'geodesy'],
    //     geodesy: ['node_modules/geodesy/dms.js', 'node_modules/geodesy/latlon-spherical.js']
    // },

    // transpiler: 'typescript',
    // defaultJSExtensions: true,
    // defaultExtension: 'js',

    // format: 'cjs',
    // meta: {
    //     'core/*': { format: 'cjs' }
    // }
    // map: {
    //     // 'core': 'core/*.js's
    // },
    // packages: {
    // // meaning [baseURL]/local/package when no other rules are present
    // // path is normalized using map and paths configuration
    // 'core': {
    // //   main: 'index.js',
    //   format: 'cjs',
    //   defaultExtension: 'js',
    //   map: {
    //     // use local jquery for all jquery requires in this package
    //     'jquery': './vendor/local-jquery.js',

    //     // import '/local/package/custom-import' should route to '/local/package/local/import/file.js'
    //     './custom-import': './local/import/file.js'
    //   },
    //   meta: {
    //     // sets meta for modules within the package
    //     '*': {
    //       'format': 'cjs'
    //     }
    //   }
    // }
    //   }
});

// https://github.com/systemjs/systemjs/issues/1032
//  System.import('scripts/app.js').then(function() {
//           angular.bootstrap(document, ['AnvilConnectClient']);
//         })

SystemJS.import('./App.js').catch(function (err) {
    console.error(err);
}).then(function () {
    console.log("BEFORE BOOTSTRAP");
    angular.bootstrap(document, ['App']);
    console.log(angular);
    console.log("AFTER BOOTSTRAP");
}).then(null, function (err) {
    console.error("Oh no, error!", err);
});

// System.registerDynamic(['./controllers/MainController'], true, function (require, exports, module) {
//     module.exports = require('./App');
// });
// SystemJS.registerDynamic(['./controllers/MainController.js'], ['./App'], true)