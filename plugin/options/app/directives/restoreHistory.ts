import * as _ from "underscore";
import * as angular from "angular";
import {ChromeStorageService} from "../services/ChromeStorageService";
import {IWindowService, IScope} from "angular";

class RestoreHistoryController {

    static $inject = ['ChromeStorageService', '$scope', '$window'];
    private _chromeStorageService: ChromeStorageService;
    private _windowService: IWindowService;

    constructor(chromeStorageService: ChromeStorageService, $scope: IScope, $window: IWindowService) {
        this._chromeStorageService = chromeStorageService;
        this._windowService = $window;
    }

    get chromeStorageService(): ChromeStorageService {
        return this._chromeStorageService;
    }

    get windowService(): angular.IWindowService {
        return this._windowService;
    }
}

app.directive('restoreHistory', [() => {

    return <any>{

        template: '<div><input type="file"/><md-button class="md-raised md-primary" ng-click="restore()">Restore</md-button></div>',

        controller: RestoreHistoryController,

        link: ($scope: any, $element: JQuery, $attributes: any, restoreHistoryController: RestoreHistoryController) => {

            $scope.file = null;

            $element.bind("change", (changeEvent: any) => {
                $scope.file = changeEvent.target.files[0];
            });

            $scope.restore = () => {

                if (!$scope.file) {

                    alert('You must provide a backup file (.json)');

                } else {

                    let reader = new FileReader();

                    reader.readAsText($scope.file);

                    reader.onload = (loadEvent: any) => {

                        $scope.$apply(() => {

                            if (_.isEmpty(loadEvent.target.result)) {
                                alert("No data to restore here");
                                return;
                            }

                            let restoredHistoryObject: any = angular.fromJson(loadEvent.target.result);

                            if (_.isEmpty(restoredHistoryObject)) {
                                alert("No data to restore here");
                                return;
                            }

                            if (!restoredHistoryObject.pluginVersion || restoredHistoryObject.pluginVersion !== chrome.runtime.getManifest().version) {
                                alert("Backup file version do not match with the plugin version installed:\n\nFile version: " + restoredHistoryObject.pluginVersion + '\nCurrent plugin version:' + chrome.runtime.getManifest().version + '\n\nRedo a full sync or load compliant backup file.');
                                return;
                            }

                            if (!restoredHistoryObject.lastSyncDateTime || !_.isNumber(restoredHistoryObject.lastSyncDateTime) ||
                                _.isEmpty(restoredHistoryObject.syncWithAthleteProfile) ||
                                _.isEmpty(restoredHistoryObject.computedActivities)) {
                                alert("Missing fields.\n\nRedo a full sync or load compliant backup file.");
                                return;
                            }

                            restoreHistoryController.chromeStorageService.setToLocalStorage('lastSyncDateTime', restoredHistoryObject.lastSyncDateTime).then(() => {
                                return restoreHistoryController.chromeStorageService.setToLocalStorage('syncWithAthleteProfile', restoredHistoryObject.syncWithAthleteProfile);
                            }).then(() => {
                                return restoreHistoryController.chromeStorageService.setToLocalStorage('computedActivities', restoredHistoryObject.computedActivities);
                            }).then(() => {

                                console.log('lastSyncDateTime restored');
                                console.log('syncWithAthleteProfile restored');
                                console.log('computedActivities restored');

                                restoreHistoryController.windowService.location.reload();

                            }, (errors: any) => {
                                console.error(errors);
                                alert('Restore process failed. Show developer console to view errors (F12)' + errors);
                            });

                        });
                    };
                }

            };
        }
    }
}]);