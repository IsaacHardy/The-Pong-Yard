let LoginController = function($scope, PlayerService) {

  // let user = PlayerService.checkAuth();

  // if (user) {
  //   $scope.message = 'Logged In';
  // } else {
  //   $scope.message = 'Logged Out';
  // }

  $scope.login = function (user) {
    PlayerService.sendLogin(user).then((res) => {
      console.log(res);
    });
  };

  // let url = PARSE.URL + 'login';

  // let User = function (obj) {
  //   this.username = obj.username;
  //   this.password = obj.password;
  // };

  // $scope.loginUser = (obj) => {

  //   $http.get(url, PARSE.CONFIG).then((res) => {
  //     console.log('right user info', res);
  //   }, (err) => {console.log('wrong user info', err);}); 

  //   $http({
  //     url: url,
  //     headers: PARSE.CONFIG.headers,
  //     method: 'GET',
  //     params: {
  //       username: this.username,
  //       password: this.password
  //     },
  //     cache: true
  //   }).then ((res) => {
  //     console.log('right user info', res);
  //   }, (err) => {console.log('wrong user info', err);});

  // };

};

LoginController.$inject = ['$scope', 'PlayerService'];

export default LoginController;