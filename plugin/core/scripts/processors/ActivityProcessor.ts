import {VacuumProcessor} from "./VacuumProcessor";
import * as _ from "underscore";
import {ComputeAnalysisWorker} from "./workers/ComputeAnalysisWorker";
import {IUserSettings} from "../UserSettings";
import {IComputeActivityThreadMessage} from "../interfaces/ComputeActivityThreadMessage";
import {IAppResources} from "../interfaces/AppResources";
import {env} from "../../config/env";

export class ActivityProcessor {

    public static cachePrefix: string = 'stravistix_activity_';
    protected appResources: IAppResources;
    protected vacuumProcessor: VacuumProcessor;
    protected userHrrZones: any;
    protected zones: any;
    protected activityType: string;
    protected isTrainer: boolean;
    private computeAnalysisWorkerBlobURL: string;
    private computeAnalysisThread: Worker;
    private userSettings: IUserSettings;

    constructor(appResources: IAppResources, vacuumProcessor: VacuumProcessor, userSettings: IUserSettings) {
        this.appResources = appResources;
        this.vacuumProcessor = vacuumProcessor;
        this.userSettings = userSettings;
        this.userHrrZones = this.userSettings.userHrrZones;
        this.zones = this.userSettings.zones;
    }

    public setActivityType(activityType: string): void {
        this.activityType = activityType;
    }

    public setTrainer(isTrainer: boolean): void {
        if (isTrainer) {
            if (_.isBoolean(isTrainer)) {
                this.isTrainer = isTrainer;
            } else {
                console.error("isTrainer(boolean): required boolean param");
            }
        }
    }

    public getAnalysisData(activityId: number, bounds: Array<number>, callback: (analysisData: IAnalysisData) => void): void {

        if (!this.activityType) {
            console.error('No activity type set for ActivityProcessor');
        }

        // We are not using cache when bounds are given
        let useCache: boolean = true;
        if (!_.isEmpty(bounds)) {
            useCache = false;
        }

        if (useCache) {
            // Find in cache first is data exist
            let cacheResult: IAnalysisData = <IAnalysisData> JSON.parse(localStorage.getItem(ActivityProcessor.cachePrefix + activityId));

            if (!_.isNull(cacheResult) && env.useActivityStreamCache) {
                console.log("Using existing activity cache mode");
                callback(cacheResult);
                return;
            }
        }

        // Else no cache... then call VacuumProcessor for getting data, compute them and cache them
        this.vacuumProcessor.getActivityStream((activityStatsMap: IActivityStatsMap, activityStream: IActivityStream, athleteWeight: number, hasPowerMeter: boolean) => { // Get stream on page

            // Compute data in a background thread to avoid UI locking
            this.computeAnalysisThroughDedicatedThread(hasPowerMeter, athleteWeight, activityStatsMap, activityStream, bounds, (resultFromThread: IAnalysisData) => {

                callback(resultFromThread);

                // Cache the result from thread to localStorage
                if (useCache) {
                    console.log("Creating activity cache");
                    try {
                        localStorage.setItem(ActivityProcessor.cachePrefix + activityId, JSON.stringify(resultFromThread)); // Cache the result to local storage
                    } catch (err) {
                        console.warn(err);
                        localStorage.clear();
                    }
                }

            });

        });
    }

    protected computeAnalysisThroughDedicatedThread(hasPowerMeter: boolean, athleteWeight: number, activityStatsMap: IActivityStatsMap, activityStream: IActivityStream, bounds: Array<number>, callback: (analysisData: IAnalysisData) => void): void {

        /* let readTextFile = function (file: string, callback: Function) {
         let rawFile = new XMLHttpRequest();
         rawFile.open("GET", file, false);
         rawFile.onreadystatechange = function () {
         if (rawFile.readyState === 4) {
         if (rawFile.status === 200 || rawFile.status == 0) {
         let allText = rawFile.responseText;
         // alert(allText);
         callback(rawFile.responseText);
         }
         }
         }
         rawFile.send(null);
         };*/

        let readFileAsync = (sUrl: string, timeout: number, callback: Function) => {
            let xhr = new XMLHttpRequest();
            xhr.ontimeout = function () {
                console.error("The request for " + sUrl + " timed out.");
            };
            xhr.onload = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        console.log(xhr);
                        callback(xhr.responseText);
                    } else {
                        console.error(xhr.statusText);
                    }
                }
            };
            xhr.open("GET", sUrl, true);
            xhr.send(null);
        };
        /*
         // Create worker blob URL if not exist
         if (!this.computeAnalysisWorkerBlobURL) {

         // Create a blob from 'ComputeAnalysisWorker' function variable as a string
         let blob: Blob = new Blob(['(', ComputeAnalysisWorker.toString(), ')()'], {type: 'application/javascript'});

         // Keep track of blob URL to reuse it
         this.computeAnalysisWorkerBlobURL = URL.createObjectURL(blob);
         // this.computeAnalysisWorkerBlobURL = 'chrome-extension://' + this.appResources.extensionId + '/core/scripts/processors/workers/ComputeAnalysisWorker.js';
         }
         */

        // readFileAsync('chrome-extension://' + this.appResources.extensionId + '/core/scripts/processors/workers/ComputeAnalysisWorker.js', 10, (script: string) => {

        let systemsJsImports: string = "importScripts('chrome-extension://" + this.appResources.extensionId + "/node_modules/systemjs/dist/system.js');\n";
        systemsJsImports += "importScripts('chrome-extension://" + this.appResources.extensionId + "/core/scripts/SystemJS.config.js');\n";
        systemsJsImports += "onmessage = (mainThreadEvent) => { console.log(mainThreadEvent.data); };\n";
        systemsJsImports += "SystemJS.import('chrome-extension://" + this.appResources.extensionId + "/core/scripts/processors/workers/ComputeAnalysisWorker.js').then(null, console.error.bind(console));";

        console.log(systemsJsImports);

        let blob: Blob = new Blob([systemsJsImports], {type: 'application/javascript'});
        this.computeAnalysisWorkerBlobURL = URL.createObjectURL(blob);


        // Lets create that worker/thread!
        this.computeAnalysisThread = new Worker(this.computeAnalysisWorkerBlobURL);

        // Send user and activity data to the thread
        // He will compute them in the background
        let threadMessage: IComputeActivityThreadMessage = {
            activityType: this.activityType,
            isTrainer: this.isTrainer,
            appResources: this.appResources,
            userSettings: this.userSettings,
            athleteWeight: athleteWeight,
            hasPowerMeter: hasPowerMeter,
            activityStatsMap: activityStatsMap,
            activityStream: activityStream,
            bounds: bounds,
            returnZones: true
        };

        this.computeAnalysisThread.postMessage(threadMessage);

        // Listen messages from thread. Thread will send to us the result of computation
        this.computeAnalysisThread.onmessage = (messageFromThread: MessageEvent) => {
            callback(messageFromThread.data);
            // Finish and kill thread
            this.computeAnalysisThread.terminate();
        };
        // });
    }
}

