let PlayerService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/player';
  

  this.listPlayers = function () {
    return $http({
      url: url,
      headers: PARSE.CONFIG.headers,
      method: 'GET'
    });
  };

  this.listUser = function (objectId) {
    return $http({
      url: url + '/' + objectId,
      headers: PARSE.CONFIG.headers,
      method: 'GET',
      cache: true
    });
  };

  let Player = function (obj) {

    this.first = obj.first;
    this.last = obj.last;
    this.wins = 0;
    this.loses = 0;
    

  };

  this.addPlayer = function (obj) {
    let p = new Player(obj);

    return $http.post(url, p, PARSE.CONFIG);    
  };

  this.sendLogin = function (userObj) {
    $http.post(url + '/login', userObj, PARSE.CONFIG);
  };


};

PlayerService.$inject = ['$http', 'PARSE'];

export default PlayerService;