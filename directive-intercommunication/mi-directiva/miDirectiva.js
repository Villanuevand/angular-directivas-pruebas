// Directiva miDirectiva
(function(){
	'use strict';
	angular
		.module('app.midirectiva',[])
		.directive('superAmigos',SuperAmigos)		
		.directive('Batman',Batman)
		.directive('Flash',Flash)
		.directive('Superman',Superman);
	// Directiva SuperAmigos
	SuperAmigos.$injector = ['$log'];
	function SuperAmigos ($log){
		var directiva = {
			restrict : 'E',	
			controller : 'SuperAmigosController',			
			link : 	function (scope, element, attrs){
				element.bind('mouseenter', function(){
					// $scope.superamigos en SuperAmigos
					$log.debug(scope.superamigos);				
				});
			}
		};
		return directiva;	
	}
	
	// Batman	
	function Batman (){
		return {						
			require : 'superAmigos',
			link : function (scope ,element ,attrs ,SuperAmigosController) {			
				SuperAmigosController.addBatman();
			}
		};		
	}
	// Flash	
	function Flash () {
		return {				
			require : 'superAmigos',
			link : function (scope ,element ,attrs ,SuperAmigosController) {
				SuperAmigosController.addFlash();
			}
		}		
	}
	// Superman	
	function Superman () {
		return {						
			require : 'superAmigos',
			link : function (scope, element, attrs, SuperAmigosController) {
				SuperAmigosController.addSuperman();
			}
		}	
	}
	
})();