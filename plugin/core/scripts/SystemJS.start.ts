// import {StravistiX} from "./StravistiX";
// import * as Q from "q";

console.log("Imported core *strava.com* system start !");


//Listen for the event
window.addEventListener("StartCorePlugin", function(evt: any) {



   /* SystemJS.import('core/scripts/Main.js').then((module) => {

        console.log(module.Main.instance());
        module.Main.instance().receiveData(evt.detail);

    }, console.error.bind(console));
    */

    Promise.all([
        SystemJS.import('jqueryAppear'),
        SystemJS.import('sphericalLatLon') // SystemJS.import('dms'),

    ]).then((modules) => {

        return SystemJS.import('core/scripts/StravistiX.js');

    }, (err) => {
        console.error(err);
    }).then((module) => {

        // console.log(module.Main.instance());
        // module.Main.instance().receiveData(evt.detail);
        let data = evt.detail;
        console.warn("---- Data from content -----");
        console.warn(data);
        console.warn("---- Data from content -----");

        let stravistiX /*:StravistiX*/ = new module.StravistiX(data.chromeSettings, data.appResources);
        stravistiX.init();

    }, (err) => {
        console.error(err);
    });


}, false);