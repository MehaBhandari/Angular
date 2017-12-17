(function(){
    var detailModule = angular.module("detailModule", []);
    detailModule.controller("detailModuleController", function($scope, detailModuleFactory, employerDetailService){
        $scope.address = detailModuleFactory.address;
        $scope.tel = detailModuleFactory.tel;
        $scope.previousEmployers = employerDetailService.previousEmployers;
        $scope.getSelectedCompanyCount = function(index) {
            alert(index);
        }
    });

    detailModule.factory("detailModuleFactory", function(){
        var name = "Mayank";
        var age = 29;
        var address = "Rohini";
        var tel = 9711083089;
        return {
            name: name,
            age: age,
            address: address,
            tel: tel
        }
    })

    detailModule.service("employerDetailService", function(){
        this.previousEmployers = [{
            name: "Globallogic",
            duration: "1.2 yrs"
        }, {
            name: "Bechtel",
            duration: "1.2 yrs"
        }, {
            name: "ION Trading",
            duration: "2.2 yrs"
        }, {
            name: "Mercer",
            duration: "2 yrs"
        }, {
            name: "Stryker",
            duration: "1 yrs"
        }];
    });

    // Service Url: http://www.mocky.io/v2/5a3650d62f00005006127a95
    

})();