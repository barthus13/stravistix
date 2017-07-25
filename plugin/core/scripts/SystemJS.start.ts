// import {StravistiX} from "./StravistiX";
// import * as Q from "q";

console.log("Imported core *strava.com* system start !");


//Listen for the event
addEventListener("StartCorePlugin", function (evt: any) {

    let data = evt.detail;
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
        SystemJS.import('jqueryAppear'),
        SystemJS.import('fancybox'),
        SystemJS.import('sphericalLatLon') // SystemJS.import('dms'),

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