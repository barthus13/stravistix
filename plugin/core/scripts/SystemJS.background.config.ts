console.log("Imported core *background* system config !");

SystemJS.config({
    baseURL: 'chrome-extension://' + chrome.runtime.id + '/',
    paths: {
        'npm:': 'node_modules/'
    },
    packages: {
        'core': {
            format: 'cjs'
        }
    },
    map: {
        'q': 'npm:q/q.js',
    }
});