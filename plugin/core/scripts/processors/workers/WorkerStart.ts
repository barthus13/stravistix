import {IAnalysisData} from "../../interfaces/ActivityData";
import {ActivityComputer} from "../ActivityComputer";
import {IComputeActivityThreadMessage} from "../../interfaces/ComputeActivityThreadMessage";

export function WorkerStart() { // TODO Rename that !

    this.onmessage = function (mainThreadEvent: MessageEvent) {

        let threadMessage: IComputeActivityThreadMessage = mainThreadEvent.data;

        importScripts('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/node_modules/systemjs/dist/system.js');
        // importScripts('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/core/scripts/SystemJS.config.js');
        // TODO Must be injected from dyn sysjs config or send SystemJS.getConfig via thread message
        SystemJS.config(mainThreadEvent.data.systemJsConfig);

        Promise.all([
            SystemJS.import('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/node_modules/underscore/underscore-min.js'), // TODO Use full url var instead
            SystemJS.import('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/core/scripts/Helper.js'),
        ]).then(() => {

            return SystemJS.import('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/core/scripts/processors/ActivityComputer.js');

        }).then((module: any) => {

            console.warn(module);
            // let ActivityComputer = module.ActivityComputer;

            let analysisComputer: ActivityComputer = new module.ActivityComputer(threadMessage.activityType, threadMessage.isTrainer, threadMessage.userSettings, threadMessage.athleteWeight, threadMessage.hasPowerMeter, threadMessage.activityStatsMap, threadMessage.activityStream, threadMessage.bounds, threadMessage.returnZones);
            let result: IAnalysisData = analysisComputer.compute();
            console.warn(result);
            this.postMessage(result);
        });

    };
}

