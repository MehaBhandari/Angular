(function() {
    var watchModule = angular.module("watchModule",[]);
    watchModule.controller("watchController", function($scope) {
        $scope.occupation = "service";
        $scope.address = "Rohini";
        $scope.empArr = [{name: "Meha",
                        sal: 10000},
                        {name: "Mayank",
                        sal: 20000}];
        $scope.$watch("occupation", function(newVal, oldVal) { 
            alert("Value changed");
            alert("New value is: " +newVal);
            alert("Old value is: " +oldVal);
            if(newVal)
            {
                $scope.address = 1;
            }
        })

    });
})();