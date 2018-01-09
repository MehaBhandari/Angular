(function(){
    var practiceModule = angular.module("practiceModule", []);
    practiceModule.controller("practiceController1", function($scope){
        $scope.message = "You have just started and completed the First Task";
    });
    practiceModule.directive("practiceDirective1", function(){
        return {
            restrict: 'E',
            template: `<p>Hi There... </p><br><br>
                        <div>Name is: <b>{{name}}</b><br>
                        Status is: <b>{{status}}</b></div>`,
            link: function(scope, element, attr){
                scope.name = "Meha";
                scope.status = "Married";
            }
        };
    });

    practiceModule.directive("practiceDirective2", function() {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                scope.message = "This is the second task which is being completed by you";
                scope.buttonClick = function() {
                    alert("Welcome: " + scope.desg);
                };
                element.on("click", function(){
                    alert("Please enter the Designation");

                });
            }
        };
    });

    practiceModule.directive("practiceDirective3", function() {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                element.on("click", function() {
                    element.css("color", "red")
                });
            }
        };
    });

    practiceModule.directive("practiceDirective4", function() {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                element.on("click", function() {
                    alert("Value of attribute is: "+ attr.someOther);
                    alert("Value of attribute is: "+ attr.practiceDirective4);
                })
            }
        }
    });

    practiceModule.directive("practiceDirective5", function($compile) {
        var mess = "<div>Hi there I live in {{address}}</div>";
        return {
            restrict: 'A',
            link: function(scope, element, attr) {
                scope.address = "Rohini";
                var compileMess = $compile(mess);
                var passScope = compileMess(scope);
                element.prepend(passScope);
                //element.prepend($compile(mess)(scope));
            }
        };
    });

})();