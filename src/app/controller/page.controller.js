function PageCtrl($scope, $stateParams, DataFactory) {
    var vm = this;
    vm.data = null;
    
    DataFactory
        .getPageData('main', 0, $stateParams.id, function(response) {
            vm.data = response.data;
        });
 }

app.controller('PageCtrl', PageCtrl);