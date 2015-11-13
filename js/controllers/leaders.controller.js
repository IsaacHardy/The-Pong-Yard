let ProfileController = function($scope, PlayerService) {

  PlayerService.listPlayers().then ((res) => {
    $scope.users = res.data.results;
  });

};

ProfileController.$inject = ['$scope', 'PlayerService'];

export default ProfileController;