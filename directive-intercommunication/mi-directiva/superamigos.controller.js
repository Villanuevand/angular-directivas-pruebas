(function(){
	'use strict';
	angular
		.module('app.midirectiva')
		.controller('SuperAmigosController',SuperAmigos);
	SuperAmigos.$injector = ['$log','$scope'];
	function SuperAmigos($log, $scope){		
		$scope.superamigos = [];					
		this.addBatman = function(){
			$log.debug('Batman');
			//$scope.superamigos.push('Bruno Díaz : Batman');
		};
		this.addFlash = function(){	
			$log.debug('Flash');		
			//$scope.superamigos.push('Barry Allen : Flash');
		};
		this.addSuperman = function(){	
			$log.debug('Superman');		
			//$scope.superamigos.push('Clark Kent : Superman');
		};					
	}
})();