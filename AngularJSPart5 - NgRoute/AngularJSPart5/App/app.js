var ssApp = angular.module("ssApp", ["ngRoute"]);

ssApp.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "/app/views/default-page.html"
        })
        .when("/page1", {
            controller: "page1Controller",
            templateUrl: "/app/views/page1.html"
        })
        .when("/page2", {
            controller: "page2Controller",
            templateUrl: "/app/views/page2.html"
        })
        .when("/page2/:p2param1", {
            controller: "page2Controller",
            templateUrl: "/app/views/page2.html"
        })
        .when("/page3", {
            controller: "page3Controller",
            templateUrl: "/app/views/page3.html"
        })
        .when("/page3/:p3param1", {
            controller: "page3Controller",
            templateUrl: "/app/views/page3.html"
        })
        .otherwise({
            template: "<h1>None</h1><p>Nothing has been selected</p>"
        });
});