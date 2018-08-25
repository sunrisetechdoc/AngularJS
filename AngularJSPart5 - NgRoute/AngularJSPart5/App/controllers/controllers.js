
ssApp.controller("ssPart5Controller",
["$scope", "$location",
function ($scope, $location) {

    $scope.PageIndex = 0;

    $scope.init = function () {
        $scope.loadPage(0);
    }

    $scope.loadPage = function (index) {
        $scope.PageIndex = index;
    }
    
}]);

ssApp.controller("page1Controller",
   ["$scope", "$location",
   function ($scope, $location) {
       $scope.Title = "Page 1 - Title loading from controller";
   }]);

ssApp.controller("page2Controller",
   ["$scope", "$location", "$routeParams",
   function ($scope, $location, $routeParams) {
       $scope.Title = "Page 2 - from controller";

       $scope.myParam1 = $routeParams.p2param1;

       $scope.navigateToPage3=function(){
           $location.url("page3/"+$scope.param1);
       }
   }]);

ssApp.controller("page3Controller",
   ["$scope", "$location", "$routeParams",
   function ($scope, $location, $routeParams) {
       $scope.Title = "NgRoute sample page 3";
       $scope.myParam1 = $routeParams.p3param1;
   }]);