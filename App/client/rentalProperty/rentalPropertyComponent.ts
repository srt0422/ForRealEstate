import App from "./../app";
import RentalProperties from "../../collections/RentalProperties"

App.config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('rentalProperty', {
        templateUrl: "client/rentalProperty/rentalProperty.view.html",
        url: '/rentalProperty',
        controller: 'rentalProperty'
    });
})
.controller("rentalProperty", ()=>{
  "inject"

  $scope.rentalProperty = {};

  $scope.addRentalProperty = function(){
    RentalProperties.insert($scope.rentalProperty);
  }
});
