ssApp.controller("ssPart4Controller",
["$scope", "$http",
function ($scope, $http) {

    $rootScope.name = "user name";

    $scope.model = {};

    $rootScope.model = $scope.model;

    $rootScope.model.rootname = "root values";

    $scope.models = [];

    $scope.currencyvalue = 1234567890.1234;

    $scope.datevalue = new Date();

    $scope.jsonvalue = { FirstName: 'Saravanan', LastName: 'Somasundaram', Position: 'Project Leader', Experties: 'AngularJS, Angular 2, Angular 4 & Angular 5', newpro: "testing property" };

    $scope.startIndex = 1;
    $scope.limit = 5;

    $scope.lowercasevalue = "SaMpLE LOWER CASE text";

    $scope.numbervalue = 12345.6789;

    $scope.uppercasevalue = "SaMpLE upper CASE text";

    $scope.initialze = function () {
        LoadData();
    }

    function LoadData() {
        $http.get("api/sample/getdata").then(function (response) {
            $scope.models = response.data;
        },
        function (error, code) {
            console.log(error);
        });
    }

    $scope.PostData = function () {
        $http.post("api/sample/post",$scope.models).then(function (response) {
            console.log(response);
        },
        function (error, code) {
            console.log(error);
        });
    }

}]);

ssApp.controller("ssPart4_1Controller",
["$scope", "$rootScope",
function ($scope, $rootScope) {

    $scope.model = $rootScope.model;

    $scope.initialze = function () {

    }
}])