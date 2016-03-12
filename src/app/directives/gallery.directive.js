app.directive('wspaGallery', function () {
    return {
        restrict: 'E',
        scope: {
            imageIds: '=imageIds'
        },
        controller: function($scope, DataFactory) {
            var vm = this;
            vm.images = [];
            vm.imageIds.forEach(function(imgId){DataFactory
                .getPageData(false, 2, imgId, vm, function(response) {
                    vm.images.push(response.data);
                });
            })
        },
        bindToController: true,
        controllerAs: 'gallery',
        templateUrl: wpThemeUrl+'/templates/gallery.htm'
    }
});