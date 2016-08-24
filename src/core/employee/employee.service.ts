module mainApp {
    'use strict';

    export interface ITask {
        taskName: string;
        taskDept: string;
        taskStatus: string;
    }

    export interface IEmployee extends ng.resource.IResource<IEmployee>{
        empFullName: string;
        empOffice: string;
        empTitle: string;
        empStatus: string;
        empTasks: Array<ITask>;
    }

    export interface IEmployeeResource extends ng.resource.IResourceClass<IEmployee>{
        //update(employee: IEmployee) : IEmployee;
    }

    angular.
        module('core.employee').
        factory('EmployeeResource', ['$resource',
            function($resource : ng.resource.IResourceService) : IEmployeeResource {
                
                var queryAction: ng.resource.IActionDescriptor = {
                    method: 'GET',
                    params: {employeeId: 'employees'},
                    isArray: true
                }

                return <IEmployeeResource> $resource('employees/:employeeId.json', {}, {
                    query: queryAction
                });
            }
        ]);

}