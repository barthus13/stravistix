import {IAppResources} from "./interfaces/AppResources";

console.log("--- Main ---");

import {Helper} from "./Helper";
import {VacuumProcessor} from "./processors/VacuumProcessor";
import {StravistiX} from "./StravistiX";
import {StorageManager} from "../modules/StorageManager";
import * as _ from "underscore";
import {IUserSettings, userSettings} from "./UserSettings";
import {Constants} from "./Constants";
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

class Main {

    // TODO ..

}

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

declare let chromeSettings: IUserSettings; // Coming from content.ts
declare let appResources: IAppResources; // Coming from content.ts

console.log(chromeSettings);
console.log(appResources);
console.log(Constants);

let stravistiX: StravistiX = new StravistiX(chromeSettings, appResources);
stravistiX.init();

// });
