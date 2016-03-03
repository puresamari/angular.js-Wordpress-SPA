var PostCtrl =  function PostCtrl($scope, $stateParams, DataFactory) {

    var vm = this;
    vm.data = null;
    DataFactory
        .getPageData(1, $stateParams.id, function(response) {
            vm.data = response.data;
        });
};

app.controller('PostCtrl', PostCtrl);