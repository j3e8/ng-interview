'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('ng-interview', function() {

	it('should automatically redirect to /students when location hash/fragment is empty', function() {
		browser.get('index.html');
		expect(browser.getLocationAbsUrl()).toMatch('/students');
	});

	describe('students view', function() {

		beforeEach(function() {
			browser.get('index.html#!/students');
		});

		it('should render view when user navigates to /students', function() {
			expect(element.all(by.css('[ng-view] h2')).first().getText()).
				toMatch(/students/i);
		});

	});
});
