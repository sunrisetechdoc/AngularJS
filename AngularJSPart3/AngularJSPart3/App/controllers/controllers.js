ssApp.controller("ssPart3Controller",
["$scope",
function ($scope) {

    $scope.page = "";
    $scope.employees = [];
    $scope.model = {};
    $scope.names = ['Red', 'Blue', 'Green', 'Yellow', 'White', 'Black'];
    $scope.favorite = { color: 'Green' };
    $scope.pattern = "\\w+";

    $scope.initialze = function () {
        $scope.myStyle = { color: 'green' }
        $scope.employees.push({ Id: 1, FirstName: "Saravanan", LastName: "S", Designation: "Tech Lead" });
        $scope.employees.push({ Id: 2, FirstName: "Prakash", LastName: "S", Designation: "Senior Engineer" });
        $scope.employees.push({ Id: 3, FirstName: "Mohanraj", LastName: "K", Designation: "Test Lead" });
        $scope.employees.push({ Id: 4, FirstName: "Rajitha", LastName: "S", Designation: "Senior Test Engineer" });
        $scope.employees.push({ Id: 5, FirstName: "Karthik", LastName: "K", Designation: "Engineer" });
    }

    $scope.mysubmit = function () {
        console.log("Submit event trigger and handler here");
        console.log(JSON.stringify($scope.model));
    }

    $scope.cutModel = "Test";
    $scope.copyModel = "Test";
    
    $scope.events = [];
    $scope.TriggerCut = function () {
        var now = new Date();
        $scope.events.push({name:"Cut event triggered"+now});
    }
    $scope.TriggerCopy = function () {
        var now = new Date();
        $scope.events.push({ name: "Copy event triggered" + now });
    }
    $scope.TriggerPaste = function () {
        var now = new Date();
        $scope.events.push({ name: "Paste event triggered" + now });
    }

    $scope.color = ['Red', 'Yellow', 'Green', 'Black'];
}])