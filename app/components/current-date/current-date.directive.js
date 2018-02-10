(function() {
	'use strict';

	angular
		.module('ngInterview.currentDate')
		.directive('currentDate', currentDateDirective);

	currentDateDirective.$inject = ['$filter', 'currentDateService'];
	function currentDateDirective($filter, currentDateService) {
		// Usage:
		//     <span current-date="M/d/yy"></span>
		//
		// Creates:
		//     Inserts the current date into the element using the specified format.
		//     If no format string is specified, defaults to `M/d/yy`.
		//     See: https://docs.angularjs.org/api/ng/filter/date for more information on formatting.
		var directive = {
			link: link,
			restrict: 'A'
		};
		return directive;

		function link(scope, element, attrs) {
			var format = attrs['currentDate'] || 'M/d/yy';
			element.text($filter('date')(currentDateService.get(), format));
		}
	}
})();
