ssApp.directive("basicDirective", function () {
    return {
        restrict: "EA",
        scope: {
            model: "=ngModel"
        },
        template:'<div class="media">'+
            '<img class="mr-3" width="55" height="55" src="{{model.ProfilePhoto}}" />'+
            '<div class="media-body">' +
            '<h5 class="mt-0">{{model.Name}}</h5>' +
            '{{model.About}}</div></div>' +
            '<hr/>'
    }
});