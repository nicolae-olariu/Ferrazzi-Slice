(function() {
  'use strict';
  angular.module('careers-position')
    .service('SendEmailCommand', SendEmailCommand);

  function SendEmailCommand(APIService, AppEntity) {
    return {
      execute: function() {
        AppEntity.loading = true;
        APIService
          .action()
          .put({
            action: 'request-information-send'
          }, {
            contactName          : AppEntity.contactName,
            phoneNumber          : AppEntity.phoneNumber,
            phoneType            : AppEntity.phoneType,
            email                : AppEntity.email,
            contactWay           : AppEntity.getContactWay(),
            hospitalName         : AppEntity.hospitalName,
            hospitalAddress      : AppEntity.hospitalAddress || undefined,
            hospitalAddressSecond: AppEntity.hospitalAddressSecond || undefined,
            hospitalCity         : AppEntity.hospitalCity || undefined,
            hospitalState        : AppEntity.hospitalState || undefined,
            hospitalZip          : AppEntity.hospitalZip || undefined,
            annualRevenue        : AppEntity.annualRevenue || undefined,
            numberOfDoctors      : AppEntity.numberOfDoctors || undefined,
            statusOfProperty     : AppEntity.statusOfProperty || undefined,
            approximateValue     : AppEntity.approximateValue || undefined,
            message              : AppEntity.message || undefined
          })
          .$promise
          .then(function(response) {
            AppEntity.loading = false;
            if(response.error === false) {
              AppEntity.errorMessage = undefined;
              AppEntity.successMessage = response.message;
            } else {
              AppEntity.successMessage = undefined;
              AppEntity.errorMessage = response.message;
            }
          });
      }
    }
  }
})();