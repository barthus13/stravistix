import {Helper} from "./Helper";
import {StravistiX} from "./StravistiX";
import {StorageManager} from "../modules/StorageManager";
import * as _ from "underscore";
import {userSettings} from "./UserSettings";
import {appResources} from "./AppResources";

// import {VacuumProcessor} from "./processors/VacuumProcessor";
// import {StravistiX} from "./StravistiX";
//
// console.log("Main execute");
// let r = Helper.secondsToHHMMSS(60);
// console.log(r);
//
// let va: VacuumProcessor = new VacuumProcessor();
// console.log(va.getCurrentAthlete());
// // var stravistiX = new StravistiX(null, null);

//
// Helper.getFromStorage(chrome.runtime.id, StorageManager.storageLocalType, 'userMaxHr', (response: any) => {
//     console.log("versionInstalled: " + response);
// });
class Main {

    // TODO ..

}

chrome.storage.sync.get(userSettings, (chromeSettings: any) => {

    console.log(chromeSettings);

    if (_.isEmpty(chromeSettings)) { // If settings from chrome sync storage are empty
        chromeSettings = this.userSettings;
    }
    let defaultSettings = _.keys(userSettings)
    let syncedSettings = _.keys(chromeSettings)
    if (_.difference(defaultSettings, syncedSettings).length !== 0) { // If settings shape has changed
        _.defaults(chromeSettings, userSettings)
    }

    console.log(chromeSettings);
    console.log(appResources);

    // TODO Constants

    // let stravistiX = new StravistiX(chromeSettings, null);

});
