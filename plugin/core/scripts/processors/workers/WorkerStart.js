function start() {
    onmessage = function (mainThreadEvent) {
        var threadMessage = mainThreadEvent.data;
        importScripts('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/node_modules/systemjs/dist/system.js');
        importScripts('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/core/scripts/SystemJS.config.js');

        Promise.all([
            SystemJS.import('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/node_modules/underscore/underscore-min.js'), // TODO Use full url var instead
            SystemJS.import('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/core/scripts/Helper.js'),
            SystemJS.import('chrome-extension://' + mainThreadEvent.data.appResources.extensionId + '/core/scripts/processors/ActivityComputer.js'),
        ]).then(function (modules) {
            console.warn('**********************');
            // console.warn(modules[2].ActivityComputer);
            var ActivityComputer = modules[2].ActivityComputer;

            var analysisComputer = new ActivityComputer(threadMessage.activityType, threadMessage.isTrainer, threadMessage.userSettings, threadMessage.athleteWeight, threadMessage.hasPowerMeter, threadMessage.activityStatsMap, threadMessage.activityStream, threadMessage.bounds, threadMessage.returnZones);
            var result = analysisComputer.compute();
            postMessage(result);
        });

    };
}

