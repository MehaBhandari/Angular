(function() { 
    var arrayModule = angular.module("arrayModule", []);

    arrayModule.controller("arrayController", function($scope, $http) {

        $scope.empArray = [];
        $scope.isButtonDisabled = true;
        $scope.name = "";
        $scope.age = "";


        $scope.extractData = function() {
            $http.get("https://testapi.io/api/learn-javascript-concepts/employeeData").then(function(response){
                $scope.empArray = response.data;
                $scope.isButtonDisabled = false;
            });
        }
        $scope.addArray = function() {
            if($scope.name == "" || $scope.age == "")
                return;  

            var newEmployee = {
                name: $scope.name,
                age: $scope.age
            }

            $scope.empArray.push(newEmployee);
            
            $scope.name = "";
            $scope.age = "";

        };

    });

})();