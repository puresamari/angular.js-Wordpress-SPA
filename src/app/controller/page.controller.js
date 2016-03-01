function PageCtrl($scope, $stateParams, $http) {
    var vm = this;
    vm.data = null;
    $http
        .get('/wp-json/wp/v2/pages/'+$stateParams.id)
        .then(function(response) {
            vm.data = response.data;
        });
 }

app.controller('PageCtrl', PageCtrl);