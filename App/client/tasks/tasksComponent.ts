/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts"/>
/// <reference path="../node_modules/definitely-typed-angular-ui-router/angular-ui-router.d.ts"/>
import App from "./../app";
import RentalProperties from "../../collections/RentalProperties"

import angular = require('angular');

App.config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('tasks', {
        url: '/tasks/:rentalPropertyId',
        controller: 'tasks'
    });
})
    .component("tasks", {
        templateUrl: "client/tasks/tasks.view.html",
        controllerAs: 'tasks',
        controller($scope, $reactive) {
            "ngInject";

            $reactive(this).attach($scope);

            this.tasks = "test";
        }
    });
