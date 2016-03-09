app.directive('gallery', function () {
    return {
        restrict: 'E',
        scope: {
            imageIds: '=imageIds'
        },
        controller: function($scope, DataFactory) {
            var vm = this;
            vm.images = [];
            vm.imageIds.forEach(function(imgId){DataFactory
                .getPageData('gallery', 2, imgId, function(response) {
                    vm.images.push(response.data);
                });
            });
        },
        controllerAs: 'gallery',
        bindToController: true,
        templateUrl: wpThemeUrl+'/templates/gallery.htm'
    }
}); 