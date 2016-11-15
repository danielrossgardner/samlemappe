var portfolio = angular.module('portfolio', ['ui.router']);

portfolio.config(function($stateProvider,$urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
      url: '/',
      templateUrl: './views/home.html',
      controller: 'homeCtrl',
      restricted: false
    })
});
