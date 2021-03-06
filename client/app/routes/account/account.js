'use strict';
(function(){
  angular
    .module('stageApp')
    .config( account );

  account.$inject = ['$stateProvider'];

  /////////////////////

  function account($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/routes/account/login/login.html',
        controller: 'LoginCtrl as vm'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/routes/account/signup/signup.html',
        controller: 'SignupCtrl as vm'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/routes/account/settings/settings.html',
        controller: 'SettingsCtrl as vm',
        authenticate: true
      })
      .state('lock-screen', {
        url: '/lock-screen',
        templateUrl: 'app/routes/account/lock/lock.html',
        controller: 'LockCtrl as vm',
        authenticate: true
      });
  };
}).call(this);
