(function () {
  'use strict';
  angular.module('careers-position')
    .service('uploadFileService', uploadFileService);

  function uploadFileService($http) {
    this.uploadFileToUrl = function (file, uploadUrl) {
      console.log(file);
      debugger;
      var fd = new FormData();
      fd.append('file', file);
      $http.post(uploadUrl, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      })
        .success(function () {
          console.log('wtf');
        })
        .error(function () {
        });
    }
  }
})();