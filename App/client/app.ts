/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts"/>

import angular = require('angular');

import angularMeteor = require('angular-meteor/dist/angular-meteor');

import uiRouter = require('angular-ui-router');

import ngRoute = require('angular-route');

export default (function() {

    var app;

    return function() {

        if (app == null) {
            app = angular.module(
                "FRE",
                [
                    angularMeteor,
                    uiRouter,
                    ngRoute
                ]);
        }

        return app;
    }
})()();
