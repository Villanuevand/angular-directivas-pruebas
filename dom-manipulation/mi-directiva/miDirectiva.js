// Directiva miDirectiva
(function(){
	'use strict';
	angular
		.module('app.midirectiva',[])
		.directive('miDirectiva',directiva);

	directiva.$injector = ['$log']
	function directiva($log){
		var d = {
			restrict : 'E',
			templateUrl : 'mi-directiva/mi-directiva.html',
			replace : true,
			link : linkFn
		};

		return d;

		function linkFn (scope,element,attrs) {
			element.addClass('rojo');
			element.bind('click',function(e){
				element.toggleClass('verde');
				$log.debug(attrs);
			});
			element.prepend('<p>Un texto insertado con <pre>element.prepend()</pre></p><hr />');
			element.append('<hr /><p>Otro texto insertado con <pre>element.append()</pre></p>');
			var h1 = angular.element(element.children()[4]);
			h1.text('Un titulo normal');
			h1.css({'color':'cyan'});
			h1.attr('id','titulo');
		}
	}
})();