var PostCtrl =  function PostCtrl($scope, $stateParams, DataFactory) {

    var vm = this;
    vm.data = null;
    DataFactory
        .getPageData(true, 1, $stateParams.id, vm, function(response) {
            vm.data = response.data;
        });
};

app.controller('PostCtrl', PostCtrl);