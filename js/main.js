import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import config from './config';

import AddController from './controllers/add.controller';
import ProfileController from './controllers/profile.controller';
import LeadersController from './controllers/leaders.controller';
import LoginController from './controllers/login.controller';
import ChallengeController from './controllers/challenge.controller';

import PlayerService from './services/player.service';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
        'X-Parse-Application-Id': 'qX68UDFpipxLOGeLMLFP8QyitG23rcxL6OSf2x73',
        'X-Parse-REST-API-Key': 'GcHk8Ed0qlmhgTTqwsxiJVkOrqLotzvjhLVCHmOs'
      }
    }
  })
  .config(config)
  .controller('AddController', AddController)
  .controller('ProfileController', ProfileController)
  .controller('LeadersController', LeadersController)
  .controller('LoginController', LoginController)
  .controller('ChallengeController', ChallengeController)
  .service('PlayerService', PlayerService)
;
