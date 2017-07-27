import * as _ from "underscore";

export let clone = (obj: any): any => {
    return JSON.parse(JSON.stringify(obj));
};

export let removeActivityFromArray = (activityId: number, fromArray: Array<any>): Array<any> => {
    return _.without(fromArray, _.findWhere(fromArray, {
        id: activityId
    }));
};

export let editActivityFromArray = (activityId: number, fromArray: Array<any>, newName: string, newType: string): Array<any> => {
    let a: any = _.findWhere(fromArray, {
        id: activityId
    });
    a.name = newName;
    a.type = newType;
    a.display_type = newType;
    return fromArray;
};