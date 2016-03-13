function ImageBoxDirective($mdDialog) {
    return {
        restrict: 'A',
        scope: {
            imageID: '=wspaImageBox'
        },
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                $mdDialog.show({
                    templateUrl: wpThemeUrl+'/templates/image-box.htm',
                    controller: function($scope, $mdDialog, DataFactory) {
                        var vm = this;
                        vm.data = null;
                        vm.cancel = function() {
                            $mdDialog.cancel();
                        };
                        DataFactory
                            .getPageData(false, 2, scope.imageID, vm, function(response) {
                                vm.data = response.data;
                            });
                    },
                    controllerAs: 'image',
                    clickOutsideToClose: true,
                    fullscreen: true
                });
            });
        }
    }
}

app.directive('wspaImageBox', ImageBoxDirective);