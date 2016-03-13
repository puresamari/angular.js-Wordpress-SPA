function GalleryCtrl($scope, DataFactory) {
    var vm = this;
    vm.images = [];
    vm.imageIds.forEach(function(imgId){DataFactory
        .getPageData(false, 2, imgId, vm, function(response) {
            vm.images.push(response.data);
        });
    })
};

function GalleryDirective() {
    return {
        restrict: 'E',
        scope: {
            imageIds: '=imageIds'
        },
        controller: GalleryCtrl,
        bindToController: true,
        controllerAs: 'gallery',
        templateUrl: wpThemeUrl+'/templates/gallery.htm'
    }
}

app.directive('wspaGallery', GalleryDirective);