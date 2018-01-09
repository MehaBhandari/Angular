(function(){
    var learnDirective = angular.module("learnDirective", []);
    learnDirective.controller("learnDirectiveController", function($scope,$rootScope){
        $scope.name = "Zoya";
        $scope.age = 118;
        $scope.randomText = "Hey beautiful";
        $scope.demo5text = "Demo5 Text";
        $scope.emp = {
            name: "Mayank",
            age: 29
        };
        $rootScope.Company = "GlobalLogic";
        $rootScope.rootScopeText = "Change RootScope here";
        $scope.buttonClicked = function() {
            alert("Hi All");
        }
        $scope.otherButtonClicked = function() {
            alert("Hello All");
        }
        $scope.createButton = function() {
            var btn = document.createElement("Button");
            var t = document.createTextNode("I am formed");
            btn.appendChild(t);
            document.body.appendChild(btn);
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
    learnDirective.directive("demo2Directive", function(){
        return {
            template: `Company is: {{Company}}<br><br>
                        This is <b>Root Scope Text</b>: {{rootScopeText}}`
        };
    });
    learnDirective.directive("demo3Directive", function(){
        return {
            template: `Hi there now the following is transcluded text: <br><br>
                        <ng-transclude></ng-transclude> `,
            transclude: true
            
        };
    });
    learnDirective.directive("demo4Directive", function(){
        return {
            template: `Using interpolation in transclude: <br><br>
                        Here it is: <b>{{twoWayBindedText}}</b>`,
            transclude: true,
        };
    });
    learnDirective.directive("demo5Directive", function() {
        return {
            template: `Hi there using <b>Directive scope</b><br><br>
                        Primitive: <br><br>
                        <input type="text" ng-model="demo5text"><br><br>
                        Secondary:<br><br>
                        <input type="text" ng-model="emp.name">`,
            scope: false

        }
    });
    learnDirective.directive("demo6Directive", function() {
        return {
            template: `Here we will use <b>Directive Scope</b> as true 
                        Primitive: <br><br>
                        <input type="text" ng-model="demo5text"><br><br>
                        Secondary:<br><br>
                        <input type="text" ng-model="emp.name">
                        `,
                        scope: true
        };
    });

    learnDirective.directive("demo7Directive", function() {
        return {
            template: `Here is the controller <br><br>
                        Directive's controller: {{name}}`,
            restrict: "E",
            controller: function($scope){
                $scope.name = "Meha",
                $scope.age = 25,
                $scope.designation = "Developer"
            },
            scope: true
        };
    });

    learnDirective.directive("demo8Directive", function() {
        return {
            template: `Hi This is demo 8 <br><br>
                        Demo-8 inside directive: <br><br>
                        Name: {{name}}<br><br>
                        Place: {{place}}<br><br>`,
            restrict: "E",
            controller: function($rootScope) {
                $rootScope.place = "New Jersy";
                $rootScope.name = "Monu Gupta";
            },
            scope: true
        };
    });
    learnDirective.directive("demo9Directive", function() {
        return {
            template: `Hi This is demo 9 <br><br>
                        Demo-8 inside directive: <br><br>
                        Name: {{name}}<br><br>
                        Place: {{place}}<br><br>`,
            restrict: "E",
            controller: function($scope) {
                $scope.place = "New Jersy";
                $scope.name = "Monu Gupta";
            },
            scope: true
        };
    });

    learnDirective.directive("demo10Directive", function() {
        return {
            template: `<input type="button" value="Click Me" ng-click="buttonClicked()" />`,
            restrict: "E",
            scope: {
                buttonClicked: '&'
            }
        };
    });

    learnDirective.directive("demo11Directive", function() {
        return {
            template: `This is isolated scope: 
                        <input type="button" value="CLICK ME" ng-click="clickFunction()"/>`,
            scope: { 
                clickFunction: "&"
            }
        };
    }); 

})();