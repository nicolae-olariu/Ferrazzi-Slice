(function () {
  'use strict';

  angular.module('contact-module')
    .controller('contactController', contactController);

  function contactController() {

    var vm = this;

    //verify width for disabling the map drag on mobile
    var widthForMap = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var isDraggable = widthForMap > 767;

    vm.map = {
      center: {
        latitude: 34.042444,
        longitude: -118.445368
      },
      options: {
        draggable : isDraggable,
        disableDefaultUI: true
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