(function () {
  'use strict';

  angular.module('careers-position')
    .controller('CareersPositionController', CareersPositionController);

  function CareersPositionController($anchorScroll, $timeout, AppEntity, SendEmailCommand) {
    var vm = this;

    vm.AppEntity = AppEntity;

    vm.submitFormHandler = submitFormHandler;
    vm.submitForm = submitForm;
    vm.scrollTo = scrollTo;

    function scrollTo(id) {
      $timeout(function(){
        $anchorScroll(id);
    }, 0);
    }

    function submitForm() {
      console.log("nasol");
      console.log(vm);
    }

    function submitFormHandler() {
      if (vm.AppEntity.validateForm()) {
        vm.AppEntity.errorMessage = undefined;
        SendEmailCommand.execute();
      } else {
        vm.AppEntity.errorMessage = 'Required fields are marked with an asterisk(*)';
      }
    }
  }
})();