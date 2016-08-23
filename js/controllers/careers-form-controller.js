(function () {
  'use strict';

  angular.module('careers-position')
    .controller('CareersPositionController', CareersPositionController);

  function CareersPositionController($scope, $anchorScroll, $timeout, AppEntity, SendEmailCommand) {
    var vm = this;
    vm.AppEntity = AppEntity;

    vm.submitFormHandler = submitFormHandler;
    vm.submitForm = submitForm;
    vm.scrollTo = scrollTo;
    vm.animationSubmit = animationSubmit;
    vm.testaoFunc = testaoFunc;

    function testaoFunc(param, type) {
      if (type === 'cv') {
        $scope.$apply(function () {
          debugger
          vm.cvFile = param[0].name;
        });
        return
      }
      $scope.$apply(function () {
        debugger
        vm.aditionalItems = angular.copy(param);
      });
      debugger;
    }

    function scrollTo(id) {
      $timeout(function () {
        $anchorScroll(id);
      }, 0);
    }

    function animationSubmit() {
      vm.careersForm.$invalid ? vm.animationValue = true : vm.animationValue = false;
      $timeout(function () {
        vm.animationValue = false;
      }, 1000);
    }

    function submitForm() {
      debugger
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