// import {StravistiX} from "./StravistiX";
// import * as Q from "q";

console.log("Imported core *strava.com* system start !");

let setupSystemJsConfig = function (baseUrl: string) {

    SystemJS.config({
        // baseURL: null, // Dynamically set by 'core/scripts/SystemJS.start.js'
        // baseURL: 'chrome-extension://' + Constants.EXTENSION_ID + '/', // TODO Create Constants.EXTENSION_BASE_URL
        baseURL: baseUrl,
        // baseURL: 'chrome-extension://' + chrome.runtime.id + '/',
        // baseURL: 'chrome-extension://ahmigdcbdgfchdodomjnbnofbefldajo/', // GET Dyn !!
        // baseURL: 'chrome-extension://cpopppnkcjpgdeogmpdjlihjpnbnjhic/', // GET Dyn !!

        paths: {
            'npm:': 'node_modules/',
            'custom:': 'core/modules/'
        },
        packages: {
            'core': {
                format: 'cjs'
            },
            'npm:geodesy': {
                format: 'cjs'
            }
        },
        map: {
            // Npm
            'css': 'npm:systemjs-plugin-css/css.js',
            'chart.js': 'npm:chart.js/dist/Chart.bundle.js',
            'd3': 'npm:d3/d3.js',
            'q': 'npm:q/q.js',
            'jquery': 'npm:jquery/dist/jquery.js',
            'dms': 'npm:geodesy/dms.js',
            'sphericalLatLon': 'npm:geodesy/latlon-spherical.js',
            'underscore': 'npm:underscore/underscore-min.js',
            'fancybox': 'npm:fancybox/dist/js/jquery.fancybox.pack.js',

            // Custom modules
            'jqueryAppear': 'custom:jquery.appear.js',

            // Css
            'fancybox.css': 'npm:fancybox/dist/css/jquery.fancybox.css',
            'core.css': 'core/css/core.css',
        },
        meta: {
            // 'jqueryAppear': {
            //     // exports: '$.appear',
            //     format: 'global'
            // },

            'fancybox.css': {
                loader: 'css'
            },
            'core.css': {
                loader: 'css'
            },
            'sphericalLatLon': {
                exports: 'LatLon',
                format: 'global'
            }
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
};


//Listen for the event
addEventListener("StartCorePlugin", function (evt: any) {

    let data = evt.detail;

    setupSystemJsConfig('chrome-extension://' + data.Constants.EXTENSION_ID + '/');


    /* SystemJS.import('core/scripts/Main.js').then((module) => {

     console.log(module.Main.instance());
     module.Main.instance().receiveData(evt.detail);

     }, console.error.bind(console));
     */

    // Setup System config base url
    // let systemsJsBaseURL = 'chrome-extension://' + data.Constants.EXTENSION_ID + '/';
    // SystemJS.config({baseURL: systemsJsBaseURL});
    //
    // console.log("--- SystemJS baseUrl set to <" + systemsJsBaseURL + "> ---");

    // Load required non ES modules into the core
    Promise.all([

        // Non "ES modules" import
        SystemJS.import('jqueryAppear'),
        SystemJS.import('fancybox'),
        SystemJS.import('sphericalLatLon'), // SystemJS.import('dms'),

        // Css
        SystemJS.import('fancybox.css'),
        SystemJS.import('core.css'),

    ]).then(() => {

        return SystemJS.import('core/scripts/Constants.js');  // TODO Map dep
    }, (err) => {
        console.error(err);

    }).then((promisedModule) => {

        promisedModule.Constants = data.Constants; // TODO better constants reinject?
        return SystemJS.import('core/scripts/StravistiX.js'); // TODO Map dep

    }, (err) => {
        console.error(err);

    }).then((promisedModule) => {

        // console.log(promisedModule.Main.instance());
        // promisedModule.Main.instance().receiveData(evt.detail);

        console.warn("---- Data from content -----");
        console.warn(data);
        console.warn("---- Data from content -----");

        let stravistiX /*:StravistiX*/ = new promisedModule.StravistiX(data.chromeSettings, data.appResources);
        stravistiX.init();

        console.log("--- Core plugin started ---");

    }, (err) => {
        console.error(err);
    });


}, false);