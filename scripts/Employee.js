(function() {
    var empModule = angular.module("empModule", ["detailModule"])

    empModule.controller("empBasicController", function($scope, detailModuleFactory, employerDetailService){
        $scope.name = detailModuleFactory.name;
        $scope.age = detailModuleFactory.age;
    });

})();