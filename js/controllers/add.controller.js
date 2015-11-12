let AddController = function($scope, $http, PARSE, PlayerService) { 
 

  $scope.addPlayer = function(obj) {
    PlayerService.addPlayer(obj).then( function(res) {
      $scope.player = {};
    });
  };

};

AddController.$inject = ['$scope', '$http', 'PARSE', 'PlayerService'];

export default AddController;