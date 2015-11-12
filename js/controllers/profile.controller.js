let ProfileController = function($scope, $stateParams, $http, PARSE, PlayerService) {

  PlayerService.listUser($stateParams.objectId).then ((res) => {
    $scope.playerSpec = res.data;
  }); 

};

ProfileController.$inject = ['$scope', '$stateParams', '$http', 'PARSE', 'PlayerService'];

export default ProfileController;