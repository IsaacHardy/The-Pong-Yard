let ChallengeController = function($scope, PlayerService) {
  
  PlayerService.listPlayers().then ((res) => {
    $scope.users = res.data.results;
  });
  

};

ChallengeController.$inject = ['$scope', 'PlayerService'];

export default ChallengeController;