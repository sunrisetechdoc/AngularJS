
ssApp.controller("ssPart6Controller",
["$scope", "$state",
function ($scope, $state) {

    $scope.init = function () {
        $scope.loadPage();
    }

    $scope.loadPage = function () {
        $state.go('basic');
    }

}]);

ssApp.controller("basicCtrl",
["$scope", "$state",
function ($scope, $state) {
    $scope.message = "You are in Home page";
    $scope.name = "Saravanan";
    $scope.characters = [];

    $scope.intialize = function () {
        $scope.characters = [
            { Name: "Bat-Man", ProfilePhoto: "assets/characters/batman.jpg", About: "Batman is a fictional superhero appearing in American comic books published by DC Comics." },
            { Name: "He-Man", ProfilePhoto: "assets/characters/heman.jpg", About: "He-Man is the principal superhero of a series of comic books and several animated television series, characterized by his superhuman strength." },
            { Name: "Popeye", ProfilePhoto: "assets/characters/popeye.jpg", About: "Popeye the Sailor is a cartoon fictional character created by Elzie Crisler Segar." },
            { Name: "Ben Ten", ProfilePhoto: "assets/characters/ben-ten.jpg", About: "Ben 10 is an American animated television series and a media franchise created by Man of Action Studios and produced by Cartoon Network Studios." },
            { Name: "Chhota Bheem", ProfilePhoto: "assets/characters/bheem.jpg", About: "Chhota Bheem (Little Bheem) is an Indian animated comedy adventure television series created by Rajiv Chilaka" },
            { Name: "Dora", ProfilePhoto: "assets/characters/dora.jpeg", About: "Dora the Explorer is an American educational animated TV series created by Chris Gifford, Valerie Walsh Valdes and Eric Weiner." },
            { Name: "Jerry", ProfilePhoto: "assets/characters/jerry.jpeg", About: "Jerry Mouse is a fictional character and one of the title characters (the other being Tom Cat) in Metro-Goldwyn-Mayer's series of Tom and Jerry theatrical cartoon short films. Created by William Hanna and Joseph Barbera." },
            { Name: "Mickey Mouse", ProfilePhoto: "assets/characters/mickey.jpg", About: "Mickey Mouse is a funny animal cartoon character and the mascot of The Walt Disney Company. He was created by Walt Disney and Ub Iwerks at the Walt Disney Studios in 1928." },
            { Name: "Po", ProfilePhoto: "assets/characters/po.gif", About: "'Master Xiao Po (birth name: Li Lotus) is the title character and the protagonist of the Kung Fu Panda franchise." },
        ]
    }
}]);

ssApp.controller("customized1Ctrl",
["$scope", "$state",
function ($scope, $state) {
    $scope.message = "You are in Home page";
    $scope.name = "Saravanan";
    $scope.movies = [];

    $scope.intialize = function () {
        $scope.movies = [
            { Name: "Batman Begins", Year: "2005", Casting: "Christian Bale, Katie Holmes " },
            { Name: "Kung Fu Ponda", Year: "2008", Casting: "Jack Black, Angelina Jolie, Lucy Liu, Jackie Chan, Seth Rogen, David Cross" },
        ]
    }

    $scope.AddNewMovie = function () {
        var movie = { Name: "", Year: "", Casting: "" };
        $scope.movies.push(movie);
    }

    $scope.Save = function () {
        $scope.SaveModel = angular.copy($scope.movies);
    }
}]);

ssApp.controller("cssDirectiveCtrl",
["$scope", "$state",
function ($scope, $state) {
    $scope.message = "You are in Home page";
    $scope.name = "Somasundaram";

    $scope.intialize = function () {
        
    }
}]);

ssApp.controller("commentDirectiveCtrl",
["$scope", "$state",
function ($scope, $state) {
    $scope.message = "You are in Home page";
    $scope.name = "Saravanan";

    $scope.intialize = function () {

    }
}]);