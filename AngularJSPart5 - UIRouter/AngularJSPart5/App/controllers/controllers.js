
ssApp.controller("ssPart5Controller",
["$scope", "$state",
function ($scope, $state) {

    $scope.init = function () {
        $scope.loadPage();
    }

    $scope.loadPage = function () {
        $state.go('home');
    }

}]);

ssApp.controller("homeCtrl",
["$scope", "$state",
function ($scope, $state) {
    $scope.message = "You are in Home page";
    $scope.name = "Saravanan";
}]);

ssApp.controller("dashboardCtrl",
["$scope", "$state",
function ($scope, $state) {
    $scope.message = "You are in Dashboard page";

    $scope.gotoSample2 = function () {
        $state.go("sample2", { id: $scope.param2 });
    }
}]);

ssApp.controller("detailCtrl",
["$scope", "$state",
function ($scope, $state) {
    $scope.message = "This is a detail section";
}]);

ssApp.controller("groupCtrl",
["$scope", "$state",
function ($scope, $state) {
    $scope.message = "You are in Dashboard page - Group section";
}]);

ssApp.controller("graphCtrl",
["$scope", "$state",
function ($scope, $state) {
    $scope.message = "You are in Dashboard/graph page";
}]);

ssApp.controller("sample1Controller",
    ["$scope", "$state", "$stateParams",
    function ($scope, $state, $stateParams) {
        $scope.message = "You are in Sample 1 page";
        $scope.param1 = $stateParams.id;
        $scope.param2 = $stateParams.name;

        $scope.GotoAnotherState = function () {
            $state.go("sample2", { id: $scope.param1, name: $scope.param2 });
        }
    }]);

ssApp.controller("sample2Controller",
    ["$scope", "$state", "$stateParams",
    function ($scope, $state, $stateParams) {
        $scope.message = "You are in Sample 2 page";
        $scope.param = $stateParams.id;
    }]);