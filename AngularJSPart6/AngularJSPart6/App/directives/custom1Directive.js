ssApp.directive("customOneDirective", function ($compile) {
    return {
        restrict: "E",
        scope: {
            model: "=ngModel",
        },
        link: function (scope, element, attributes, formCtrl) {
            var htmlTemplate = '<div class="col-lg-4"><input class="form-control" type="text" ng-model="model.Name" /></div>';
            htmlTemplate += '<div class="col-lg-3"><input class="form-control" type="text" ng-model="model.Year" /></div>';
            htmlTemplate += '<div class="col-lg-4"><input class="form-control" type="text" ng-model="model.Casting" /></div>';
            htmlTemplate += '<div class="col-lg-1"></div>';

            var content = $compile(htmlTemplate)(scope);
            element.append(content);
        }
    }
});