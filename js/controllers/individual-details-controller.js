(function () {
  'use strict';

  angular.module('careers-position')
    .controller('IndividualDetailsController', IndividualDetailsController);

  function IndividualDetailsController($scope, $timeout ) {

    var vm = this;
    vm.slickConfig = {
      method: {}
    };
    $timeout(function () {
      // debugger
      console.log(vm.books);
    },3000);
    vm.books = [
      {
      'image':'img/book_1',
      'title':'first book'
    },
      {
        'image':'img/book_1',
        'title':'second book'
      },
      {
        'image':'img/book_1',
        'title':'third book'
      },
      {
        'image':'img/book_2',
        'title':'czxcz book'
      },
      {
        'image':'img/book_1',
        'title':'hhs book'
      },
      {
        'image':'img/book_1',
        'title':'test book'
      },
      {
        'image':'img/book_1',
        'title':'ceq book'
      },
      {
        'image':'img/book_2',
        'title':'qwerty book'
      },
      {
        'image':'img/book_1',
        'title':'operi book'
      },
      {
        'image':'img/book_2',
        'title':'uita-te book'
      }
    ]


  }
})();