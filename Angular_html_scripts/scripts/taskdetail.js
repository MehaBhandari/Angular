(function() {
    var taskManagement = angular.module("taskManagement", []);

    taskManagement.controller("taskManagementController", function($scope, taskManagementFactory){
        $scope.heading = "Task Management";
        $scope.taskArray = taskManagementFactory.taskArray;
        $scope.updateFunction = function(){
            alert("Value updated");
        };
        $scope.deleteFunction = function(){
            alert("Value deleted");
        };

        $scope.searchFunction = function() {
            alert("clicked");
        }
    });

    taskManagement.factory("taskManagementFactory", function() {
        var taskArray = [{
            id: "10001",
            creationDate: "20 Jan 2014"
        },
        {
            id: "10002",
            creationDate: "22 Jan 2014"
        },
        {
            id: "10003",
            creationDate: "23 Jan 2014"
        },
        {
            id: "10004",
            creationDate: "24 Jan 2014"
        },
        {
            id: "10005",
            creationDate: "25 Jan 2014"
        }];

        return {
            taskArray: taskArray
        }
    });
    
   
})();