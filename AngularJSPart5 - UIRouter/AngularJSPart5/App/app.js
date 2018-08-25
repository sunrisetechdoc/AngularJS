var ssApp = angular.module("ssApp", ["ui.router"]);

ssApp.config(function ($stateProvider, $locationProvider) {

    //$locationProvider.html5Mode(false).hashPrefix('')

    $stateProvider
    .state('home', {
        url: '/Home',
        controller: 'homeCtrl',
        templateUrl: '/App/Views/home-page.html',
    })
    .state("dashboard", {
        url: "/Dashboard",
        //parent: "home",
        views: {
            "": {
                templateUrl: "/App/Views/dashboard-page.html",
                controller: "dashboardCtrl"
            },
            "detail@dashboard": {
                templateUrl: "/App/Views/dashboard/detail-view.html",
                controller: "detailCtrl",
            },
            "group@dashboard": {
                templateUrl: "/App/Views/dashboard/group-view.html",
                controller: "groupCtrl",
            },
            "graph@dashboard": {
                templateUrl: "/App/Views/dashboard/graph-view.html",
                controller: "graphCtrl",
            }
        },
        data: { authRequired: true }
    })
    .state("sample1", {
        url: '/sample1/:id/:name',
        params: {
            id: null,
            name: null
        },
        controller: 'sample1Controller',
        templateUrl: 'App/Views/sample1-page.html'
    })
    .state("sample2", {
        url: '/sample2/{id}/{name}',
        params: {
            id: null,
            name: null
        },
        controller: 'sample2Controller',
        templateUrl: 'App/Views/sample2-page.html'
    })
    ;
});