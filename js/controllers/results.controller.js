let ResultsController = function($scope, $stateParams, PlayerService, $rootScope, $state) {
  
  $scope.one = $rootScope.playerOne[0];
  $scope.two = $rootScope.playerTwo[0];

  $scope.oneWinsResults = function (one, two) {
    $scope.one.wins = $scope.one.wins + 1;
    $scope.two.loses = $scope.two.loses + 1;

    PlayerService.update(one).then( (res) => {
      PlayerService.update(two).then( (res) => {
        $state.go('root.leaderboard');
      });
    });
    
  };

  $scope.twoWinsResults = function (two, one) {
    $scope.two.wins = $scope.two.wins + 1;
    $scope.one.loses = $scope.one.loses + 1;

    PlayerService.update(two).then( (res) => {
      PlayerService.update(one).then( (res) => {
        $state.go('root.leaderboard');
      });
    });
    
  };
};

ResultsController.$inject = ['$scope', '$stateParams', 'PlayerService', '$rootScope', '$state'];

export default ResultsController;