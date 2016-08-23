(function () {
  'use strict';

  angular.module('careers-position')
    .controller('CareersPositionController', CareersPositionController);

  function CareersPositionController($scope, $anchorScroll, $timeout, AppEntity, SendEmailCommand, uploadFileService) {
    var vm = this;
    vm.AppEntity = AppEntity;
    vm.aditionalItems = {};
    vm.objectKeys = Object.keys;

    vm.submitFormHandler = submitFormHandler;
    vm.submitForm = submitForm;
    vm.scrollTo = scrollTo;
    vm.animationSubmit = animationSubmit;
    vm.uploadFile = uploadFile;


    function uploadFile(param, type) {
      if (type === 'cv') {
        $scope.$apply(function () {
          vm.cvFile = param[0].name;

        });
        var uploadUrl = "/fileUpload";
        // uploadFileService.uploadFileToUrl(param[0], uploadUrl);
        return
      }
      $scope.$apply(function () {
        angular.extend(vm.aditionalItems, param);
      });
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