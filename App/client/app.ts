/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts"/>

const angular: angular.IAngularStatic = require('angular');

import angularMeteor = require('angular-meteor/dist/angular-meteor');

import uiRouter = require('angular-ui-router');

export default (function() {

    return function() {

        var app;

        if (app == null) {
            app = angular.module(
                "FRE",
                [
                    angularMeteor,
                    uiRouter
                ]);
        }

        return app;
    }
})()();
