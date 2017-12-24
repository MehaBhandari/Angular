(function(){
    var learnDirective = angular.module("learnDirective", []);
    learnDirective.controller("learnDirectiveController", function($scope){
        $scope.name = "Meha";
        $scope.age = 25;
        $scope.randomText = "Hey beautiful";
        $scope.emp = {
            name: "Mayank",
            age: 29
        }
    });
    learnDirective.directive("demo1Directive", function() {
        return{
            template: "Name is: {{name}}"
        };
    });
    learnDirective.directive("randomDirective", function() {
        return{
            template: `<input type="text" ng-model="randomText">`
        };
    });
})();