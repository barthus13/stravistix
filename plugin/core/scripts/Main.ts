import {IAppResources} from "./interfaces/AppResources";



// TODO Can be delete


// console.log("--- Main ---");

import {Helper} from "./Helper";
import {VacuumProcessor} from "./processors/VacuumProcessor";
// import {StravistiX} from "./StravistiX";
import {StorageManager} from "../modules/StorageManager";
import * as _ from "underscore";
import {IUserSettings, userSettings} from "./UserSettings";
import {Constants} from "./Constants";
import * as Q from "q";
// import {Constants} from "./Constants";

// import {VacuumProcessor} from "./processors/VacuumProcessor";
// import {StravistiX} from "./StravistiX";
//
// console.log("Main execute");
// let r = Helper.secondsToHHMMSS(60);
// console.log(r);
//

// // var stravistiX = new StravistiX(null, null);

//
// Helper.getFromStorage(chrome.runtime.id, StorageManager.storageLocalType, 'userMaxHr', (response: any) => {
//     console.log("versionInstalled: " + response);
// });


// let va: VacuumProcessor = new VacuumProcessor();
// console.log(va.getCurrentAthlete());
//
// declare module "jquery" {
//     export = $;
// }

// export class Main {
//
//     public static _instance: Main = null;
//
//     public static instance(): Main {
//         if (Main._instance == null) {
//             Main._instance = new Main();
//         }
//         return Main._instance;
//     }
//
//     public receiveData(data: any): void {
//
//         console.warn('receiveData', data);
//
//
//
//     }
// }

// jQuery('body').before("Hey ho");


// chrome.storage.sync.get(userSettings, (chromeSettings: any) => {

/*console.log(chromeSettings);

 if (_.isEmpty(chromeSettings)) { // If settings from chrome sync storage are empty
 chromeSettings = this.userSettings;
 }
 let defaultSettings = _.keys(userSettings)
 let syncedSettings = _.keys(chromeSettings)
 if (_.difference(defaultSettings, syncedSettings).length !== 0) { // If settings shape has changed
 _.defaults(chromeSettings, userSettings)
 }

 console.log(chromeSettings);*/

// console.log(chrome.runtime.id);

// jQuery('body').before("Hey ho");
// $('body').before("Hey");

/*
 declare let chromeSettings: IUserSettings; // Coming from content.ts (injected in window)
 declare let appResources: IAppResources; // Coming from content.ts (injected in window)

 console.log(chromeSettings);
 console.log(appResources);
 console.log(Constants);

 Promise.all([
 SystemJS.import('jqueryAppear'),
 SystemJS.import('sphericalLatLon') // SystemJS.import('dms'),
 // ]).then((modules) => {
 ]).then((modules) => {
 console.warn(modules);
 // let stravistiX: StravistiX = new StravistiX(chromeSettings, appResources);
 // stravistiX.init();
 });

 */
// let qq = SystemJS.get('q');
// console.log(qq);
/*
 SystemJS.import('sphericalLatLon').then((module) => {

 console.log(module);

 // let modu = SystemJS.get('q');
 // console.log(modu.defer());

 let pos = new LatLon(0, 0);
 console.log(pos);
 });
 SystemJS.import('underscore').then((module) => {
 console.log(module);
 });
 */





// });
