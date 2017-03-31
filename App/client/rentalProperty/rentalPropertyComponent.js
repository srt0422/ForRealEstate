"use strict";
/// <reference path="../node_modules/definitely-typed-angular/angular.d.ts"/>
/// <reference path="../node_modules/definitely-typed-angular-ui-router/angular-ui-router.d.ts"/>
var app_1 = require("./../app");
var RentalProperties_1 = require("../../collections/RentalProperties");
app_1["default"].config(function ($stateProvider) {
    'ngInject';
    $stateProvider.state('rentalProperty', {
        templateUrl: "client/rentalProperty/rentalProperty.view.html",
        url: '/rentalProperty/:rentalPropertyId',
        controller: 'rentalProperty'
    });
});
function controller($scope, $stateParams, $state) {
    "inject";
    $scope.rentalStatuses = ["Occupied", "Vacant"];
    var id = $stateParams.rentalPropertyId;
    var test = "test";
    if (id) {
        $scope.helpers({
            rentalProperty: function () {
                return RentalProperties_1["default"].findOne({
                    _id: id
                });
            }
        });
    }
    else {
        $scope.rentalProperty = {};
    }
    console.log($scope.rentalProperty);
    $scope.submitRentalProperty = function (rentalProperty) {
        console.log($scope.rentalProperty);
        console.log(rentalProperty);
        if ($scope.rentalProperty._id) {
            var id = $scope.rentalProperty._id;
            delete $scope.rentalProperty._id;
            RentalProperties_1["default"].update(id, { $set: $scope.rentalProperty });
        }
        else {
            console.log($scope.rentalProperty);
            RentalProperties_1["default"].insert($scope.rentalProperty);
        }
        $state.go("rentalPropertiesList");
    };
}
exports.controller = controller;
;
app_1["default"].controller("rentalProperty", controller);
