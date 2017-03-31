import App from '../app';
import RentalProperties from "../../collections/RentalProperties"

import angular = require('angular');

App.config(($stateProvider, $routeProvider) => {
    'ngInject';

    $stateProvider.state('rentalPropertiesList', {
        templateUrl: "client/rentalPropertiesList/rentalProperiesList.view.html",
        url: '/rentalPropertiesList',
        controller: 'rentalPropertiesList'
    });
});

export default App.controller("rentalPropertiesList", ($scope, $location, $state: angular.ui.IStateService) => {
    'ngInject';

    $scope.helpers({
        rentalproperties() {
            return RentalProperties.find({});
        }
    });

    $scope.onPropertySelected = function(property) {
        $state.go("rentalProperty", { rentalPropertyId: property._id });
    }

    $scope.onPropertyDeleteClicked = function(property) {
        console.log(property);
        RentalProperties.remove(property._id);
    }

    $scope.monthlyProfitAmount = function(rentalProperty) {
        return rentalProperty.monthlyRentAmount - $scope.monthlyExpenseAmount(rentalProperty);
    }

    $scope.monthlyExpenseAmount = function(rentalProperty) {
      var total = 0;

      return total;
    }

    $scope.profitAmount = function(rentalProperty) {
        return 0;
    }
});
