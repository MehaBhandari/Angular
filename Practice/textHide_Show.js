var ajaxModule = angular.module("ajaxModule", []);

ajaxModule.controller("ajaxController", function($scope, $http) {
    $scope.show = true;
    $scope.num = 0;
    $scope.name = "Meha"; 

    $scope.callFunction = function() {
        if($scope.num % 2 == 0) {
            $scope.show = true;
        }
        else
            $scope.show = false;
    }
});