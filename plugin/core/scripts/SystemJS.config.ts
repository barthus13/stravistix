console.log("Imported core *global* system config !");

// var baseURL = "chrome-extension://" + chrome.runtime.id + "/";
// console.log("Config with baseURL: " + chromeUuidURL);

SystemJS.config({
    // baseURL: 'chrome-extension://' + chrome.runtime.id + '/',
    baseURL: 'chrome-extension://cpopppnkcjpgdeogmpdjlihjpnbnjhic/',
    paths: {
        'npm:': 'node_modules/',
        'custom:': 'core/modules/'
    },
    packages: {
        'core': {
            format: 'cjs'
        }
    },
    map: {
        'chart.js': 'npm:chart.js/dist/Chart.bundle.js',
        'd3': 'npm:d3/d3.js',
        'jquery': 'npm:jquery/dist/jquery.js',
        'jqueryAppear': 'custom:jquery.appear.js',
        'q': 'npm:q/q.js',
        'underscore': 'npm:underscore/underscore-min.js',
    }

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