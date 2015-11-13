let ProfileController = function($scope, $stateParams, PlayerService, $state) {

  PlayerService.listUser($stateParams.objectId).then ((res) => {
    $scope.playerSpec = res.data;
  }); 

  $scope.vsPage = function () {
    $state.go('root.challenge');
  };

};

ProfileController.$inject = ['$scope', '$stateParams', 'PlayerService', '$state'];

export default ProfileController;