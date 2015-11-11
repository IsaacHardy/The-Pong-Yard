let AddController = function($scope, $http, PARSE) {
  
  let url = PARSE.URL + 'classes/player';

  let Player = function (obj) {
    this.first = obj.first;
    this.last = obj.last;
    this.email = obj.email;
    this.username = obj.username;
    this.password = obj.password;
  };

  $scope.addPlayer = (obj) => {
    let p = new Player(obj);

    $http.post(url, p, PARSE.CONFIG).then( (res) => {
      $scope.player = {};
    });

  };

};

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController;