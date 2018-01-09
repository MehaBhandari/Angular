(function(){
    var mainModule = angular.module("mainModule", []);

    mainModule.controller("mainController", function($scope) {
        $scope.input = "Meha";
        $scope.clickFunction = function() {
            alert("Input value is: " +$scope.input);
        }
    });
})();