let ResultsController = function($scope, $stateParams, PlayerService, $rootScope, $state, GameService) {
  
  $scope.one = $rootScope.playerOne[0];
  $scope.two = $rootScope.playerTwo[0];

  $scope.oneWinsResults = function (one, two) {
    $scope.one.wins = $scope.one.wins + 1;
    $scope.two.loses = $scope.two.loses + 1;

    one.percent = Number(one.wins /(one.wins + one.loses));
    two.percent = Number(two.wins /(two.wins + two.loses));

    PlayerService.update(one).then( (res) => {     
      PlayerService.update(two).then( (res) => {
        $state.go('root.leaderboard');
      });
    });
    
  };

  $scope.twoWinsResults = function (two, one) {
    $scope.two.wins = $scope.two.wins + 1;
    $scope.one.loses = $scope.one.loses + 1;

    two.percent = Number(two.wins /(two.wins + two.loses));
    one.percent = Number(one.wins /(one.wins + one.loses));

    PlayerService.update(two).then( (res) => {
      PlayerService.update(one).then( (res) => {
        $state.go('root.leaderboard');
      });
    });    
  };

  $scope.addGame = function(obj, x, y) {
    obj.you = x;
    obj.opp = y;

    GameService.logGame(obj).then( function(res) {
      $scope.score = {};
    });
  };
};

ResultsController.$inject = ['$scope', '$stateParams', 'PlayerService', '$rootScope', '$state', 'GameService'];

export default ResultsController;