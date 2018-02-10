(function() {
	'use strict';

	angular
		.module('ngInterview.students')
		.controller('StudentsController', StudentsController);

	StudentsController.$inject = ['StudentsService'];
	function StudentsController(StudentsService) {

		/**
		 * Model
		 */

		var vm = this;
    vm.error = false;
    vm.errorMessage = null;
    vm.students = null;
    vm.toggleStudent = toggleStudent;
    vm.search = '';
    vm.isLoading = false;

		/**
		 * Initialization
		 */

		activate();

		/**
		 * Implementations
		 */

		function activate() {
			// Initialization code goes here
      vm.isLoading = true;
      StudentsService.getStudents(afterLoadStudents, errorLoadStudents);
		}

    function afterLoadStudents(data) {
      vm.isLoading = false;
      vm.students = data;
    }

    function errorLoadStudents(err) {
      vm.isLoading = false;
      vm.errorMessage = err;
      vm.error = true;
    }

    function toggleStudent(index) {
      if (!vm.students || vm.students.length <= index) {
        return;
      }
      vm.students[index].expanded = vm.students[index].expanded ? false : true;
    }
	}
})();
