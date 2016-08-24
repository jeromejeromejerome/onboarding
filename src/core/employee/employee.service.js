var mainApp;
(function (mainApp) {
    'use strict';
    angular.
        module('core.employee').
        factory('EmployeeResource', ['$resource',
        function ($resource) {
            var queryAction = {
                method: 'GET',
                params: { employeeId: 'employees' },
                isArray: true
            };
            return $resource('employees/:employeeId.json', {}, {
                query: queryAction
            });
        }
    ]);
})(mainApp || (mainApp = {}));
//# sourceMappingURL=employee.service.js.map