(function() {
	'use strict';

	angular
		.module('ngInterview.api.students')
		.service('StudentsService', StudentsService);

	StudentsService.$inject = ['$http', '$timeout'];
	function StudentsService($http, $timeout) {

		/**
		 * Exposed functions
		 */

		this.getName = getName; // This function serves no purpose. It's just here as an example.
    this.getStudents = getStudents;

		/**
		 * Implementations
		 */

		function getName() {
			return 'StudentsService';
		}

    function getStudents(successCallback, errorCallback) {
      httpGet('http://il-resume-api.azurewebsites.net/api/students', successCallback, errorCallback);
    }

    function httpGet(url, successCallback, errorCallback) {
      if (!successCallback) {
        return;
      }

      var tries = 0;

      function load() {
        tries++;
        $http.get(url)
        .then(function(response) {
          if (response.status == 200 && Object.prototype.toString.call(response.data) === '[object Array]') {
            successCallback(response.data);
          }
          else if (errorCallback) {
            errorCallback();
          }
        }, function(err) {
          if (err.status == 503) {
            tryAgainOrFail();
          }
          else if (errorCallback) {
            errorCallback();
          }
        });
      }

      function tryAgainOrFail() {
        if (tries < 2) {
          tries++
          $timeout(load, 0);
        }
        else if (errorCallback) {
          errorCallback();
        }
      }

      load();
    }
	}
})();
