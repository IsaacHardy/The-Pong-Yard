let ProfileController = function($scope, $http, PARSE, PlayerService) {

  let url = PARSE.URL + 'classes/player/';

  PlayerService.listPlayers().then ((res) => {
    $scope.users = res.data.results;
  });

};

ProfileController.$inject = ['$scope', '$http', 'PARSE', 'PlayerService'];

export default ProfileController;