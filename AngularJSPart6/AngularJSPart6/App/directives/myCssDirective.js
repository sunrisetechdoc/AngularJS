ssApp.directive("myCssDirective", function ($compile) {
    return {
        restrict: "C",
        scope: {
            model: "=ngModel",
        },
        template: '<h1>Made by a directive! - {{model}}</h1>'
    }
});