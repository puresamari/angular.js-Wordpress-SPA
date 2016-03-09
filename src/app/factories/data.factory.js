app.factory('DataFactory', function($http, $rootScope) {
    var service = {};
    
    service.getPageData = function(loadingMessage, type, id, _promise) {
        $rootScope.loading = loadingMessage;
        var urlAdding = '';
        switch (type) {
            case 0 : urlAdding = 'pages/' + id;
                break;
            case 1 : urlAdding = 'posts/' + id;
                break;
            case 2 : urlAdding = 'media/' + id;
                break;
            default: urlAdding = '404';
                break;
        }
        return $http
            .get('/wp-json/wp/v2/' + urlAdding)
            .then(_promise)
            .then(function(){
                $rootScope.loading = '';
            });
    };
    
    return service;
});