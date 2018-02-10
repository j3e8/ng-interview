(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.config(config);

	config.$inject = ['$routeProvider'];
	function config($routeProvider) {
		$routeProvider.when('/students', {
			controller: 'StudentsController',
			controllerAs: 'vm',
			templateUrl: 'students/students.html'
		});
	}
})();
