app.directive('wpGlobalLoading', function($timeout, $rootScope, $mdDialog){
    return {
        restrict: 'E',
        link: function($scope, $element, attrs){
            var dialog = $mdDialog;
            var show = function() {
                dialog.show({
                    openFrom: {top:0},
                    closeTo: {bottom:0},
                    templateUrl: wpThemeUrl+'/templates/loader.htm',
                    clickOutsideToClose: true
                });
            };
            var hide = function() {
                dialog.hide();
            };
            $scope.$watch('$root.loading', function() {
                if ($rootScope.loading) {
                    show();
                } else {
                    hide();
                }
            });
        }
    }
})
