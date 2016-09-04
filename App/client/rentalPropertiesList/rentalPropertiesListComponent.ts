import App from '../app';
import RentalProperties from "../../collections/RentalProperties"


App.config(($stateProvider) => {
    'ngInject';

    $stateProvider.state('rentalPropertiesList', {
        templateUrl: "client/rentalPropertiesList/rentalProperiesList.view.html",
        url: '/rentalPropertiesList',
        controller: 'rentalPropertiesList'
    });
});

export default App.controller("rentalPropertiesList", ($scope, $location) => {
    'ngInject';

    $scope.helpers({
        rentalproperties() {
            return RentalProperties.find({});
        }
    });
});
