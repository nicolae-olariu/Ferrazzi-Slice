(function () {
  'use strict';

  angular.module('contact-module')
    .controller('contactController', contactController);

  function contactController() {

    var vm = this;
    vm.map = {
      center: {
        latitude: 34.042444,
        longitude: -118.445368
      },
      zoom: 18,
      marker: {
        idKey: 1,
        options: {
          labelContent: 'ferrazzi greenlight',
          labelAnchor: "-10 12",
          labelClass: 'labelClass'
        }
      },
      window: {
        show: true
      }
    };
  }
})();