/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts"/>
"use strict";
var angular = require('angular');
var angularMeteor = require('angular-meteor/dist/angular-meteor');
var uiRouter = require('angular-ui-router');
var ngRoute = require('angular-route');
exports.__esModule = true;
exports["default"] = (function () {
    var app;
    return function () {
        if (app == null) {
            app = angular.module("FRE", [
                angularMeteor,
                uiRouter,
                ngRoute
            ]);
        }
        return app;
    };
})()();
