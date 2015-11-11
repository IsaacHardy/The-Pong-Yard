let ProfileController = function($scope, $stateParams, $http, PARSE) {

  let url = PARSE.URL + 'classes/player/' + $stateParams.objectId;
  $http.get(url, PARSE.CONFIG).then((res) => {
    $scope.playerSpec = res.data;
    console.log(res);
  });

  

};

ProfileController.$inject = ['$scope', '$stateParams', '$http', 'PARSE'];

export default ProfileController;