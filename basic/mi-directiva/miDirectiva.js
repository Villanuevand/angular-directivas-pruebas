// Directiva miDirectiva
(function(){
	'use strict';
	angular
		.module('app.midirectiva',[])
		.directive('miDirectiva',directiva);

	function directiva(){
		var d = {
			restrict : 'E',
			templateUrl : 'mi-directiva/mi-directiva.html',
			replace : true
		}

		return d;
	}
})();