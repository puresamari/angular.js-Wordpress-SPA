app.factory('DataFactory', function($http) {
    var service = {};
    
    service.getPageData = function(type, id, _promise) {
        var urlAdding = '';
        switch (type) {
            case 0 : urlAdding = 'pages/' + id;
                break;
            case 1 : urlAdding = 'posts/' + id;
                break;
            default: urlAdding = '404';
                break;
        }
        return $http
            .get('/wp-json/wp/v2/' + urlAdding)
            .then(_promise);
    };
    
    return service;
});