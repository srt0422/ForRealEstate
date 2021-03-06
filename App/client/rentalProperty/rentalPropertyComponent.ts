/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts"/>
/// <reference path="../node_modules/definitely-typed-angular-ui-router/angular-ui-router.d.ts"/>
import App from "./../app";
import RentalProperties from "../../collections/RentalProperties"

import angular = require('angular');

App.config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('rentalProperty', {
        templateUrl: "client/rentalProperty/rentalProperty.view.html",
        url: '/rentalProperty/:rentalPropertyId',
        controller: 'rentalProperty'
    });
});

export function controller($scope, $stateParams, $state: angular.ui.IStateService) {
    "inject"

    $scope.rentalStatuses = ["Occupied", "Vacant"];

    let id = $stateParams.rentalPropertyId;
    var test = "test";
    if (id) {

        $scope.helpers({
            rentalProperty() {
                return RentalProperties.findOne({
                    _id: id
                });
            }
        });
    }
    else {

        $scope.rentalProperty = {};
    }

    console.log($scope.rentalProperty);

    $scope.submitRentalProperty = function(rentalProperty) {
        console.log($scope.rentalProperty);
        console.log(rentalProperty);

        if ($scope.rentalProperty._id) {

            var id = $scope.rentalProperty._id;

            delete $scope.rentalProperty._id;

            RentalProperties.update(id, { $set: $scope.rentalProperty });
        }
        else {
            console.log($scope.rentalProperty);
            RentalProperties.insert($scope.rentalProperty);
        }

        $state.go("rentalPropertiesList");
    }
};

App.controller("rentalProperty", controller);
