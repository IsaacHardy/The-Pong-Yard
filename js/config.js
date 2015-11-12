let config = function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      templateUrl: 'templates/home.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      controller: 'LoginController',
      templateUrl: 'templates/login.tpl.html'
    })
    .state('root.profile', {
      url: '/profile',
      controller: 'ProfileController',
      templateUrl: 'templates/profile.tpl.html'
    })
    .state('root.signup', {
      url: '/signup',
      controller: 'AddController',
      templateUrl: 'templates/add.tpl.html'
    })
    .state('root.users', {
      url: '/users',
      controller: 'UsersController',
      templateUrl: 'templates/user.tpl.html'
    })
    .state('root.leaderboard', {
      url: '/leaderboard',
      controller: '',
      templateUrl: 'templates/leaderboard.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;