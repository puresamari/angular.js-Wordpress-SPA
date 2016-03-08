app.directive('imageBox', function ($mdDialog) {
    return {
        restrict: 'A',
        scope: {
            imageID: '=imageBox'
        },
        link: function(scope, elem, attrs) {
            elem.bind('click', function() {
                $mdDialog.show({
                    templateUrl: wpThemeUrl+'/templates/image-box.htm',
                    controller: imageController,
                    clickOutsideToClose:true,
                    fullscreen: true
                });
            });

            function imageController($scope, $mdDialog, DataFactory) {
                $scope.image = this;
                var vm = this;
                
                vm.data = null;
                vm.cancel = function() {
                    $mdDialog.cancel();
                };
                
                DataFactory
                    .getPageData(2, scope.imageID, function(response) {
                    vm.data = response.data;
                });
            }
        }
    }
});