'use strict';

describe('ngInterview.api.students', function() {

	beforeEach(module('ngInterview.api.students'));

	describe('StudentsService', function() {

		it('should be instantiated', inject(function(StudentsService) {
			expect(StudentsService).toBeDefined();
		}));

	});

});
