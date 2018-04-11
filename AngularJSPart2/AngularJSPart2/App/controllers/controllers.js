ssApp.controller("ssPart2Controller",
["$scope",
function ($scope) {

    $scope.model = {};

    $scope.initialze = function () {
        $scope.htmlCnt = 'This is html content <h1>Html Content from AngularJS variable</h1>';

        $scope.model.fname = 'Saravanan';
        $scope.model.happy = true;
    }

    $scope.Submit = function () {
        console.log("Model: " + JSON.stringify($scope.model));
    }

    $scope.SubmitWithForm = function () {
        if ($scope.part2Form.$valid) {
            console.log("Model: " + JSON.stringify($scope.model));
        }
    }

    $scope.lnameChange = function () {
        console.log("Lname Changed : " + $scope.model.lname);
    }

}])