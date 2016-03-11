function PageCtrl($scope, $stateParams, DataFactory) {
    var vm = this;
    vm.data = null;
    
    DataFactory
        .getPageData(true, 0, $stateParams.id, vm, function(response) {
            vm.data = response.data;
        });
 }

app.controller('PageCtrl', PageCtrl);