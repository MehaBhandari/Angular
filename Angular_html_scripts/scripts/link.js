(function(){
    var watchModule = angular.module("watchModule",[]);
    watchModule.controller("watchController", function($scope){
        $scope.text = "Meha";
        $scope.count = 0;
        $scope.name = "Meha";
        $scope.changeFunc = function() {
            $scope.count++;
        }
    });

    watchModule.directive("linkDirective", function(){
        return{
            template: "Hi {{name}}, Age: {{age}}",
            restrict: "E",
            controller: function($scope) {
                $scope.name = "Meha";
            },
            link: function(scope, element, attr) {
                //scope.name = "Mayank";
                scope.age = 29;
            }
        }
    });

    watchModule.directive("attributeDirective", function() {
        return {
            restrict: 'A',
            link: function(scope, element, attr) {

                //element.css("color","red");
                console.dir(attr);
                element.on("click", function(){
                    alert("Para is cliked ");
                });
                if(scope.name == "Module") {
                    element.css("color", "green");
                }
                else {
                    element.css("color", "blue")
                }
                alert(attr.attributeDirective)
                alert(attr.myAttr)
            }
        }
    });

    watchModule.directive("appendDirective", function($compile) {
        var template = "<div>Hi {{name}}, I love you..</div>";
        return {
            link: function(scope, element, attr) {
                if(scope.name=="Meha") {
                    element.prepend($compile(template)(scope));
                    /*var linkFn = $compile(template);
                    var scopeCompiled = linkFn(scope);
                    element.prepend(scopeCompiled);  */
                }
            }
        }
    });
})();