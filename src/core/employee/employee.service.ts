module mainApp {
    'use strict';

    angular.
        module('core.employee').
        factory('Employee', ['$resource',
            function($resource : ng.resource.IResourceService) {
                return $resource('employees/:employeeId.json', {}, {
                    query: {
                        method: 'GET',
                        params: {employeeId: 'employees'},
                        isArray: true
                    }
                });
            }
        ]);

}