(function() {
  'use strict';

  angular.module('contact-module', ['uiGmapgoogle-maps'])
    .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
      });
    })

})();