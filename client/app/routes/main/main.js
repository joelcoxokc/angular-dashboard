'use strict';
(function(){
  angular
    .module('stageApp')
    .config( main );

  main.$inject = ['$stateProvider'];

  /////////////////////

  function main($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/routes/main/main.html',
        controller: 'MainCtrl as vm'
      });
  };
}).call(this);