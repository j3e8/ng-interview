(function() {
	'use strict';

	angular
		.module('ngInterview.currentDate')
		.service('currentDateService', CurrentDateService);

	CurrentDateService.$inject = [];
	function CurrentDateService() {
		this.get = get;

		////////////////

		function get() {
			return new Date();
		}
	}
})();
