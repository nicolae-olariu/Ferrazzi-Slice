(function() {
  'use strict';

  angular.module('careers-position')
    .controller('CareersPositionController', CareersPositionController);

  function CareersPositionController(AppEntity, SendEmailCommand) {
    var vm = this;
    debugger

    vm.AppEntity = AppEntity;

    vm.submitFormHandler = submitFormHandler;

    function submitFormHandler() {
      if(vm.AppEntity.validateForm()) {
        vm.AppEntity.errorMessage = undefined;
        SendEmailCommand.execute();
      } else {
        vm.AppEntity.errorMessage = 'Required fields are marked with an asterisk(*)';
      }
    }
  }
})();