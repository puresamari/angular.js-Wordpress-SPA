var PostCtrl =  function PostCtrl($scope, $stateParams, DataFactory, $rootScope) {

    var vm = this;
    vm.data = null;
    DataFactory
        .getPageData(true, 1, $stateParams.id, vm, function(response) {
            vm.data = response.data;            
            $rootScope.title = vm.data.title.rendered;
        });
};

app.controller('PostCtrl', PostCtrl);