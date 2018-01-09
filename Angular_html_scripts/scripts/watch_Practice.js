(function() {
    var watchModule = angular.module("watchModule", []);
    
    watchModule.controller("watchController", function($scope) {
        $scope.name = "Mayank";
        $scope.name2 = "Gupta";
        $scope.changedAge = function() {
            alert("Age changed");
        };
        $scope.changedVal = function() {
            alert("Name changed");            
        };
        $scope.Emp = {
            name: "Maya",
            age: 26
        };

        $scope.addAge = function() {
            $scope.Emp.age++;
        };
        $scope.$watch("name2", function(newValue, oldValue) {
            if(newValue == oldValue)
                return;
            alert("Name is changed");
        });
        $scope.$watch("Emp.age", function(newValue, oldValue) {
            if(newValue == oldValue)
                return;
            alert("Age is changeddd");
        });
        $scope.$watch("Emp", function(newValue, oldValue) {
            if(newValue == oldValue)
                return;
            alert("Employee object is changed...");
        }, true);
        $scope.buttonClicked = function() {
            $scope.Emp = {
                name: "Mayank",
                age: 26
            }
        }
    });

    watchModule.controller("watchController2", function($scope, $apply) {
        $scope.name = "Gyan";
        $scope.age = 27;
        $scope.desig = "Developer";
        $scope.$watch("name", function(newValue, oldValue) {
            if(newValue == oldValue)
                return
            $scope.age = $scope.age + 1;
        });
        $scope.$watch("age", function(newValue, oldValue) {

            if(newValue == oldValue)
                return;
            alert("New: "+ newValue);
            alert("Old: "+ oldValue);
            $scope.desig = "Senior Developer";
        });
        $scope.$watch("desig", function(newValue, oldValue) {
            if(newValue == oldValue)
                return
            alert("Designation is updated");
        });

        $scope.callFunction = function() {
            setTimeout(function() {
                $scope.name = "Meha";
                $apply();
            }, 1000);
        }

    });

    watchModule.controller("watchController3", function($scope) {
        $scope.Arry = [{
            comp: "GL",
            place: "Noida"
        }, {
            comp: "NewGen",
            place: "Noida"
        }, {
            comp: "Stricker",
            place: "Gurugram"
        }];

        $scope.changeArrayReference = function() {
            $scope.Arry = [{

            }];
        };

        $scope.$watch("Arry", function(newValue,oldValue) {
            if(newValue==oldValue)
            return;
            alert("Array has been changed by reference");
        });

        $scope.changeArrayLength = function() {
            $scope.Arry.push({comp: "BechTel", place: "Gurugram"})
        };

        $scope.$watchCollection("Arry", function(newValue, oldValue) {
            if(newValue.length == oldValue.length)
            return;
            alert("Array Length is changed");
        });

        $scope.changeArrayVariable = function(){
            $scope.Arry[1].name = "Changed";
        };
        $scope.$watch("Arry", function(newValue, oldvalue){
            alert("Property is changed..");
        }, true);

    });
    
})();