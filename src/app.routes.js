var mainApp;
(function (mainApp) {
    "use strict";
    function routes($locationProvider, $routeProvider) {
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
    routes.$inject = ["$locationProvider", "$routeProvider"];
    angular.module("onboarding").config(routes);
})(mainApp || (mainApp = {}));
//# sourceMappingURL=app.routes.js.map