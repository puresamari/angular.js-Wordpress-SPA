function AnimateLoad($timeout){
    return {
        restrict: 'A',
        scope: {
            animateHeight: '=animateHeight'
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
}

app.directive('wspaAnimateLoad', AnimateLoad)