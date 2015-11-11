let ProfileController = function($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/player/';

  $http.get(url, PARSE.CONFIG).then((res) => {
    $scope.users = res.data.results;
  });  

};

ProfileController.$inject = ['$scope', '$http', 'PARSE'];

export default ProfileController;