/**
 * Created by AVillanueva on 20-03-2015.
 */
(function () {
    'use strict';
    angular
        .module('app')
        .directive('miDirectiva',Directiva);

    Directiva.$inject = ['$log'];
    function Directiva($log){
        var directiva = {
            restrict : 'E',
            require : 'ngModel',
            template : '<div> Click para aumentar 10</div>',
            link : function(scope, element, attrs, ngModel){
                element.on('click',function(){
                    ngModel.$setViewValue(ngModel.$viewValue + 10);
                    scope.$apply();
                });
            }
        };

        return directiva;
    }
})();
