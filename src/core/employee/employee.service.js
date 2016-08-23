var mainApp;
(function (mainApp) {
    'use strict';
    angular.
        module('core.employee').
        factory('Employee', ['$resource',
        function ($resource) {
            return $resource('employees/:employeeId.json', {}, {
                query: {
                    method: 'GET',
                    params: { employeeId: 'employees' },
                    isArray: true
                }
            });
        }
    ]);
})(mainApp || (mainApp = {}));
//# sourceMappingURL=employee.service.js.map