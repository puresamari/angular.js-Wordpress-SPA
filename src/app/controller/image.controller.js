function ImageCtrl($scope, $stateParams, $http) {
    var vm = this;
    vm.data = null;
    $http
        .get('/wp-json/wp/v2/media/'+$stateParams.id)
        .then(function(response) {
            vm.data = response.data;
        });
 }

app.controller('ImageCtrl', ImageCtrl);