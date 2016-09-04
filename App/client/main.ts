/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts"/>
/// <reference path="./app.ts"/>

import App from './app';

App.config(($stateProvider, $locationProvider, $urlRouterProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/rentalPropertiesList');
});
