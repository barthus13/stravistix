import * as angular from "angular";
import 'ngRoute';
import 'ngAria';
import 'ngMaterial';
import 'ngSanitize';
import 'ngAnimate';
import 'nvd3';
import 'md.data.table';
import 'angularMoment';

import {IModule} from "angular";

export let app: IModule = angular.module('App', ['ngRoute', 'ngAria', 'ngMaterial', 'ngSanitize', 'ngAnimate', 'nvd3', 'md.data.table', 'angularMoment']);

export interface IColors {
    strava: string;
    ctl: string;
    tsb: string;
    atl: string;
    lightGrey: string;
    midGrey: string;
    strongGrey: string;
}

let $colors: IColors = {
    strava: '#e94e1b',
    ctl: '#e94e1b',
    atl: '#515151',
    tsb: '#adadad',
    lightGrey: '#eeeeee',
    midGrey: '#4e4e4e',
    strongGrey: '#2f2f2f'
};

app.constant('$colors', $colors);

app.config(($mdThemingProvider: any, $colors: any) => {
    let stravaOrange: any = $mdThemingProvider.extendPalette('orange', {
        '500': $colors.strava,
        'contrastDefaultColor': 'light'
    });
    $mdThemingProvider.definePalette('stravaOrange', stravaOrange);
    $mdThemingProvider.theme('default').primaryPalette('stravaOrange');
});


app.config(['$routeProvider', ($routeProvider: any) => {

    $routeProvider.when(routeMap.commonSettingsRoute, {
        templateUrl: 'views/commonSettings.html',
        controller: 'CommonSettingsController'
    });

    $routeProvider.when(routeMap.athleteSettingsRoute, {
        templateUrl: 'views/athleteSettings.html',
        controller: 'AthleteSettingsController'
    });

    $routeProvider.when(routeMap.hrrZonesSettingsRoute, {
        templateUrl: 'views/hrrZonesSettings.html',
        controller: 'HrrZonesSettingsController'
    });

    $routeProvider.when(routeMap.zonesSettingsRoute + '/:zoneValue', {
        templateUrl: 'views/XtdZonesSettingsController.html',
        controller: 'XtdZonesSettingsController'
    });

    $routeProvider.when(routeMap.fitnessTrendRoute, {
        templateUrl: 'views/fitnessTrend.html',
        controller: 'FitnessTrendController'
    });

    $routeProvider.when(routeMap.yearProgressRoute, {
        templateUrl: 'views/yearProgress.html',
        controller: 'YearProgressController'
    });

    $routeProvider.otherwise({
        redirectTo: routeMap.commonSettingsRoute
    });
}]);