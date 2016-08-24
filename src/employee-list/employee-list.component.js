var mainApp;
(function (mainApp) {
    'use strict';
    angular.
        module('employeeList').
        component('employeeList', {
        templateUrl: 'employee-list/employee-list.template.html',
        controller: ['EmployeeResource',
            function PhoneListController(Employee) {
                //all employees with all fields
                var employees = Employee.query();
                this.employees = employees;
                //create list of Status to split the list
                /*         var listOfStatus: string[] = ['23','asdf'];
                         function doSomething(arr_element: IEmployee) {
                             console.log('hi')
                         };
                         employees.forEach(function(el,i){doSomething(el)}); */
                // forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
                //this.listOfStatus = listOfStatus;
                this.listOfStatus = employees[0];
            }
        ]
    });
})(mainApp || (mainApp = {}));
//# sourceMappingURL=employee-list.component.js.map