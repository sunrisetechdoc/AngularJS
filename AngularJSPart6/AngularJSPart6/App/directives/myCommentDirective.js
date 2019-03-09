ssApp.directive("myCommentDirective", function () {
    return {
        restrict: "M",
        replace: true,
        template: '<h1>Made by a comment directive!</h1>'
    }
});