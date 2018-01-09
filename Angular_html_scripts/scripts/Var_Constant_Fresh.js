(function() {
    var freshModule = angular.module("freshModule", []);

    freshModule.value("age",29);
    freshModule.constant("school", "Bal Bharti Public School");

    freshModule.factory("freshFactory", function() {
        var address = "Rohini";
        var country = "India";
        return {
            address: address,
            country: country
        };
    })

    freshModule.controller("freshController", function($scope,freshFactory,age) {
        $scope.name = "Mayank";
        $scope.age = age;
        $scope.address = freshFactory.address;
        freshFactory.address = "Dwarka";
        //$scope.address = freshFactory.address;
        //alert("Changed address is: " + $scope.address);
        $scope.country = freshFactory.country;
        $scope.changeAge = function() {
            age = 10;
            alert("Changed age is " + age);
            alert("Previous age is " + $scope.age);
            $scope.age = age;

        }
        
    });
    
    freshModule.directive("freshDirective", function() {
        return{
            restrict: "E",
            template: `Hi there!!! <br>
                       Name of the school is: <b>{{school}}</b><br><br>`,
            controller: function($scope, element, school,$compile) {
                $scope.status = "Married";
                var msg = "<div>{{status}}</div>";
                var compDone = $compile(msg)($scope);
                alert("Status is" + compDone);
                $scope.school = school;
                school = "K. V. JanakPuri";
                $scope.changeSchool = function() {
                    alert("New school is: " + school);
                    $scope.school = school;
                };
                $scope.$watch("school", function(newValue, oldValue) {
                    if(newValue == oldValue)
                    return;
                    alert("Successfully watched....");
                })
            }
        };        
    });
})();