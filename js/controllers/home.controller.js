import _ from 'underscore';

let HomeController = function($scope, $rootScope, GameService) {
  
  

  GameService.lastGame().then ((res) => {

    $scope.data = res.data.results;

    $scope.last = _.sortBy($scope.data, function(game){ return game.createdAt; });
    $scope.game = $scope.last.reverse()[0];

  });

};

HomeController.$inject = ['$scope', '$rootScope', 'GameService'];

export default HomeController;