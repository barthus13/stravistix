import {IUserSettings} from "../UserSettings";
import {IAppResources} from "./AppResources";
import {IActivityStatsMap, IActivityStream} from "./ActivityData";

export interface IComputeActivityThreadMessage {
    activityType: string;
    isTrainer: boolean;
    appResources: IAppResources;
    userSettings: IUserSettings;
    athleteWeight: number;
    hasPowerMeter: boolean;
    activityStatsMap: IActivityStatsMap;
    activityStream: IActivityStream;
    bounds: Array<number>;
    returnZones: boolean;
    systemJsConfig: SystemJSLoader.Config;

}