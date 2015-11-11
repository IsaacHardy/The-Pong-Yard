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
    .state('root.users', {
      url: '/users',
      controller: 'UsersController',
      templateUrl: 'templates/user.tpl.html'
    });

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;