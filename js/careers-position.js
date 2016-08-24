(function() {
  'use strict';

  angular.module('careers-position', ['ui.router', 'ngResource', 'ui.mask', 'slickCarousel'])
    .run(function($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    })
    .factory('APIService', APIService)
    .factory('AppEntity', AppEntity);

  function APIService($resource) {
    var defaultParams = {};
    return {
      action: function() {
        return $resource(ajax_url, defaultParams, {
          get: {
            method: 'GET',
            params: {}
          },
          put: {
            method: 'PUT',
            params: {}
          }
        });
      }
    }
  }

  function AppEntity() {
    return {
      contactName          : undefined,
      phoneNumber          : undefined,
      phoneType            : 'Cell',
      email                : undefined,
      contactWay           : {
        phone: true,
        email: false
      },
      hospitalName         : undefined,
      hospitalAddress      : undefined,
      hospitalAddressSecond: undefined,
      hospitalCity         : undefined,
      hospitalState        : undefined,
      hospitalZip          : undefined,
      annualRevenue        : undefined,
      numberOfDoctors      : undefined,
      statusOfProperty     : undefined,
      approximateValue     : undefined,
      message              : undefined,
      successMessage       : undefined,
      errorMessage         : undefined,
      errors               : {},
      loading              : false,
      checkName            : function(model) {
        this.errors[model] = !(this[model] && this[model].length > 0 && this[model].match(/^[a-zA-Z .,-]+$/));

        return (!this.errors[model]);
      },
      checkMinLength       : function(model, min) {
        this.errors[model] = !(this[model] && this[model].length > min);
        return (!this.errors[model]);
      },
      checkEmail           : function() {
        this.errors.email = !(this.email && this.email.length > 0 && this.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));

        return (!this.errors.email);
      },
      removeError          : function(model) {
        this.errors[model] = false;
        this.errorMessage = undefined;
      },
      validateForm         : function() {
        return this.checkName('contactName') &&
          this.checkMinLength('phoneNumber', 9) &&
          this.checkEmail() &&
          this.checkName('hospitalName')
      },
      getContactWay        : function() {
        var data = [];
        if(this.contactWay.phone) {
          data.push('phone');
        }
        if(this.contactWay.email) {
          data.push('email');
        }

        return data.length > 0 ? data.join(',') : '';
      }
    }
  }
})();