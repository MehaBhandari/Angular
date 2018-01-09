var ajaxModule = angular.module("ajaxModule", []);

ajaxModule.controller("ajaxController", function($scope, $http) {
    $http.get("https://testapi.io/api/learn-javascript-concepts/userdata").then(function(response){
        $scope.name = response.data.name;
        $scope.age = response.data.age;
    });
    $scope.name = "";
    $scope.age = "";
    $scope.desig = "";
});
