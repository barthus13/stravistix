// Worker function executed by the main UI Thread
import {ActivityComputer} from "../ActivityComputer";
import {IComputeActivityThreadMessage} from "../../interfaces/ComputeActivityThreadMessage";
import {Helper} from "../../Helper";
import * as _ from "underscore";
import * as Q from "q";

console.log('Hello !!');
console.log(_.indexOf([0,1,2], 2));
// console.log(ActivityComputer);

// export function ComputeAnalysisWorker() {

    // required dependencies for worker job
    /* this.required = [
     '/core/scripts/Helper.js',
     '/node_modules/underscore/underscore-min.js',
     '/core/scripts/processors/ActivityComputer.js'
     ];*/

    // this.required = [
    //     '/node_modules/underscore/underscore-min.js',
    //     '/node_modules/systemjs/dist/system.js',
    //     '/core/scripts/SystemJS.config.js'
    // ];

    // Message received from main script
    // Lets begin that ******* compute !
    onmessage = (mainThreadEvent: MessageEvent) => {

        console.warn('HO');
        /*
        // Import required dependencies for worker job
         */
        // this.importRequiredLibraries(this.required, mainThreadEvent.data.appResources.extensionId);

       /* SystemJS.import('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/core/scripts/processors/ActivityComputer.js').then(() => {

        })
        */

        // Promise.all([
        //
        //     SystemJS.import('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/node_modules/underscore/underscore-min.js'), // TODO Use full url var instead
        //     SystemJS.import('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/core/scripts/Helper.js'),
        //     SystemJS.import('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/core/scripts/processors/ActivityComputer.js'),
        //
        // ]).then(() => {

            console.warn('HERE');

            // Lets exec activity processing on extended stats
            let threadMessage: IComputeActivityThreadMessage = mainThreadEvent.data;
            let analysisComputer: ActivityComputer = new ActivityComputer(
                threadMessage.activityType,
                threadMessage.isTrainer,
                threadMessage.userSettings,
                threadMessage.athleteWeight,
                threadMessage.hasPowerMeter,
                threadMessage.activityStatsMap,
                threadMessage.activityStream,
                threadMessage.bounds,
                threadMessage.returnZones
            );

            let result: IAnalysisData = analysisComputer.compute();

            console.warn(result);
            // Result to main thread
            postMessage(result);

        // }, (error) => {
        //     console.error(error);
        // })

    // };
/*
    this.importRequiredLibraries = (libsFromExtensionPath: Array<string>, chromeExtensionId: string) => {

         // let promises = Array<Promise<any>>();
         //
         // _.each(libsFromExtensionPath, (path: string) => {
         // promises.push(SystemJS.import(path));
         // });
         //
         // Q.all(promises).then(() => {
         // done();
         // }, (error)=> {
         // console.error(error);
         // })

        for (let i: number = 0; i < libsFromExtensionPath.length; i++) {
            console.warn('chrome-extension://' + chromeExtensionId + libsFromExtensionPath[i]);
            importScripts('chrome-extension://' + chromeExtensionId + libsFromExtensionPath[i]); // TODO Use full url var instead
        }
    };
    */
}

// ComputeAnalysisWorker();