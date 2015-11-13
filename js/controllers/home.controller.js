let HomeController = function($scope, $rootScope, GameService) {
  
  

  GameService.lastGame().then ((res) => {

    console.log(res);
    $scope.game = res.data.results;
  });

};

HomeController.$inject = ['$scope', '$rootScope', 'GameService'];

export default HomeController;