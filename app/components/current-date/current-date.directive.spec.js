'use strict';

describe('ngInterview.currentDate', function() {

	var $compile,
		$scope,
		date = new Date(Date.parse('2016-07-01T12:00:00Z')),
		currentDateService = {
			get: function() {
				return date;
			}
		};

	beforeEach(function() {
		module('ngInterview.currentDate', function($provide) {
			$provide.service('currentDateService', function() {
				return currentDateService;
			});
		});
		inject(function(_$compile_, _$rootScope_) {
			$compile = _$compile_;
			$scope = _$rootScope_;
		});
	});

	describe('current-date directive', function() {

		it('inserts current date into element', function() {
			var elem = $compile('<span current-date></span>')($scope);
			expect(elem.text()).toBe('7/1/16');
		});

		it('inserts current date into element with specified formatting', function() {
			var elem = $compile('<span current-date="MM-dd-yyyy"></span>')($scope);
			expect(elem.text()).toBe('07-01-2016');
		});

	});

});
