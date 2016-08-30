(function () {
  'use strict';

  angular.module('contact-module')
    .controller('contactController', contactController);

  function contactController($timeout ) {

    var vm = this;
    vm.map = {
      center: {
        latitude: 34.042575,
        longitude: -118.445391
      },
      zoom: 18,
      marker: {
        idKey: 1
      },
      window: {
        show: true
      }
    };


  }
})();