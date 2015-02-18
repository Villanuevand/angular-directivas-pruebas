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

		function linkFn(s,e,a){
			$log.debug(s);
			$log.debug(e);
			$log.debug(a);
		}
	}
})();