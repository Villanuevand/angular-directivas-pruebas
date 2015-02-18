// Directiva miDirectiva
(function(){
	'use strict';
	angular
		.module('app.midirectiva',[])
		.directive('miDirectiva',miDirectiva);
	miDirectiva.$injector = ['$log']
	function miDirectiva($log){
		var d = {
			restrict : 'E',
			templateUrl : 'mi-directiva/mi-directiva.html',
			replace : true,
			link : linkFn
		}

		return d;

		function linkFn(scope,element,attrs){
			element.bind('mouseenter',function(){
				element[0].children[0].innerText="EL título ha cambiado!";
				element[0].children[1].innerText="El cambio se hizo por manipulación del \"element\"";
			});
			element.bind('mouseleave',function(){
				element[0].children[0].innerText="Lorem Ipsum Dolor";
				element[0].children[1].innerText="Esto es un párrafo es de una directiva.";
			});			
		}
	}
})();