(function() {
	'use strict';

	angular
		.module('ngInterview')
		.config(config);

	config.$inject = ['$locationProvider', '$routeProvider'];
	function config($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');
		$routeProvider.otherwise({redirectTo: '/students'});
	}
})();
