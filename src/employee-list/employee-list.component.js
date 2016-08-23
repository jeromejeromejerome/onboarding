var mainApp;
(function (mainApp) {
    'use strict';
    var Employee = (function () {
        function Employee() {
        }
        return Employee;
    }());
    var List = (function () {
        function List() {
        }
        return List;
    }());
    angular.
        module('employeeList').
        component('employeeList', {
        templateUrl: 'employee-list/employee-list.template.html',
        controller: ['Employee',
            function PhoneListController(Employee) {
                this.employees = Employee.query();
            }
        ]
    });
})(mainApp || (mainApp = {}));
//# sourceMappingURL=employee-list.component.js.map