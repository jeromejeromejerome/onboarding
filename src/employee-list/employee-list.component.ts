module mainApp {
    'use strict';

    interface IEmployeeResourceService extends ng.resource.IResourceService {
        query(): List<Employee>;
    }

    class Employee {}
    class List<T>{}

    angular.
        module('employeeList').
        component('employeeList', {
            templateUrl: 'employee-list/employee-list.template.html',
            controller: ['Employee',
                function PhoneListController(Employee: IEmployeeResourceService) {
                    this.employees = Employee.query();                
                    
                }
            ]
    });
}