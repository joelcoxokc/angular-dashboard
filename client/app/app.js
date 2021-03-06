'use strict';
(function(){
angular
  .module('stageApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'restangular',
  'stageApp.directives',
  'stageApp.localization',
  'stageApp.ui.ctrls',
  'stageApp.ui.ctrls',
  'stageApp.ui.directives',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap'
])
  .config( appConfiguration )
  .run( appRun );

  appConfiguration
    .$inject = ['RestangularProvider', '$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider']

  ///////////

  function appConfiguration(RestangularProvider, $stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
    $urlRouterProvider
      .otherwise('/');
    RestangularProvider.setBaseUrl('/api');
    RestangularProvider.setRestangularFields({
      id: "_id",
      route: "restangularRoute",
      selfLink: "self.href"
    });

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('authInterceptor');
  }
  
  function appRun($rootScope, $location, Auth) {
  // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$stateChangeStart', function (event, next) {
      Auth.isLoggedInAsync(function(loggedIn) {
        if (next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });
  }

}).call(this);