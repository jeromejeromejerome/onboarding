module mainApp {
    "use strict";

    function routes($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider){
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/employees', {
              template: '<employee-list></employee-list>'
            }).
            when('/employees/:employeeId', {
              template: '<employee-detail></employee-detail>'
            }).
            otherwise('/employees');
        }

    routes.$inject = ["$locationProvider", "$routeProvider"]

    angular.module("onboarding").config(routes)
    

}