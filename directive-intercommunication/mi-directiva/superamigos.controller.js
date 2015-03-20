(function(){
	'use strict';
	angular
		.module('app.midirectiva')
		.controller('SuperAmigosController',SuperAmigos);
	SuperAmigos.$injector = ['$log','$scope'];
	function SuperAmigos($log, $scope){		
		$scope.superamigos = [];					
		this.addBatman = function(){
			$scope.superamigos.push('Bruno Díaz : Batman');
		};
		this.addFlash = function(){
			$scope.superamigos.push('Barry Allen : Flash');
		};
		this.addSuperman = function(){
			$scope.superamigos.push('Clark Kent : Superman');
		};					
	}
})();