let GameService = function($http, PARSE) {
  let url = PARSE.URL + 'classes/games';

  let Game = function (obj) {

    this.youScore = obj.youScore;
    this.oppScore = obj.oppScore;
    this.you = obj.you;
    this.opp = obj.opp; 

  };

  this.logGame = function (obj) {
    let g = new Game(obj);

    return $http.post(url, g, PARSE.CONFIG);    
  };

};

GameService.$inject = ['$http', 'PARSE'];

export default GameService;