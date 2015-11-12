let ProfileController = function($scope, $http, PARSE, PlayerService) {

  let url = PARSE.URL + 'classes/player/';

  // $http.get(url, PARSE.CONFIG).then((res) => {
  //   $scope.users = res.data.results;
  // });  

  PlayerService.listPlayers().then ((res) => {
    $scope.users = res.data.results;
  });

};

ProfileController.$inject = ['$scope', '$http', 'PARSE', 'PlayerService'];

export default ProfileController;