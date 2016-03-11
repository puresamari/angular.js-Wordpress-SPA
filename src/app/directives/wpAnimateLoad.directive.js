app.directive('wpAnimateLoad', function($timeout){
    return {
        restrict: 'A',
        scope: {
            animateHeight: '=wpAnimateHeight'
        },
        link: function($scope, $element, attrs){
            var animheightclass = $scope.animageHeight !== null || undefined ? ' wp-animate-height' : '';
            
            $element.removeClass('loaded' + animheightclass);
            
            $element.on('load', function() {
                $element.addClass('loaded' + animheightclass);
            });
            $element.on('unload', function() {
                $element.removeClass('loaded' + animheightclass);
            });
        }
    }
})