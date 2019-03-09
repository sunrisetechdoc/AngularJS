var ssApp = angular.module("ssApp", ["ui.router"]);

ssApp.config(function ($stateProvider, $locationProvider) {

    $locationProvider.html5Mode(false).hashPrefix('')

    $stateProvider
    .state('basic', {
        url: '/Basic',
        controller: 'basicCtrl',
        templateUrl: '/App/Views/basic-page.html',
    })
    .state('customized1', {
        url: '/Customized-1',
        controller: 'customized1Ctrl',
        templateUrl: '/App/Views/customized-1-page.html',
    })
    .state('cssdirective', {
        url: '/CssDirective',
        controller: 'cssDirectiveCtrl',
        templateUrl: '/App/Views/css-directive-page.html',
    })
    .state('commentdirective', {
        url: '/CommentDirective',
        controller: 'commentDirectiveCtrl',
        templateUrl: '/App/Views/comment-directive-page.html',
    });
});