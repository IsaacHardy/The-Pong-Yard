let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'templates/home.tpl.html'
    })
    // .state('root.login', {
    //   url: '/login',
    //   controller: 'LoginController',
    //   templateUrl: 'templates/login.tpl.html'
    // })
    .state('root.profile', {
      url: '/profile/:objectId',
      controller: 'ProfileController',
      templateUrl: 'templates/profile.tpl.html'
    })
    .state('root.signup', {
      url: '/signup',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })
    .state('root.leaderboard', {
      url: '/leaderboard',
      controller: 'LeadersController',
      templateUrl: 'templates/leaderboard.tpl.html'
    })
    .state('root.results', {
      url: '/results',
      controller: 'ResultsController',
      templateUrl: 'templates/results.tpl.html'
    })
    .state('root.challenge', {
      url: '/challenge',
      controller: 'ChallengeController',
      templateUrl: 'templates/challenge.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;