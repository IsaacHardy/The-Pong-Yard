import _ from 'underscore';

let ChallengeController = function($scope, PlayerService) {
  $scope.playerOne = [];
  $scope.playerTwo = [];

  PlayerService.listPlayers().then ((res) => {
    $scope.users = res.data.results;
  });
  
  $scope.selectPlayer = function (item) {
    let i = _.findWhere($scope.users, { objectId: item.objectId });

    

    if ($scope.playerOne[0] !== undefined && $scope.playerTwo[0] === undefined) { 
      $scope.users = _.without($scope.users, i);     
      $scope.playerTwo.push(i);
    } else if ($scope.playerOne[0] === undefined) {
      $scope.users = _.without($scope.users, i);
      $scope.playerOne.push(i);      
    } else {
      alert("You've already selected two players.");
    }
  };


};

ChallengeController.$inject = ['$scope', 'PlayerService'];

export default ChallengeController;