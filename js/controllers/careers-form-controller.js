(function() {
  'use strict';

  angular.module('careers-position')
    .controller('CareersPositionController', CareersPositionController);

  function CareersPositionController(AppEntity, SendEmailCommand) {
    var vm = this;

    vm.AppEntity = AppEntity;

    vm.submitFormHandler = submitFormHandler;

    vm.submitForm = submitForm;

    function submitForm() {
      console.log(vm);
    }

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