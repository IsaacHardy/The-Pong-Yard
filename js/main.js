import angular from 'angular';
import 'angular-ui-router';

import config from './config';

import AddController from './controllers/add.controller';
import ProfileController from './controllers/profile.controller';
import UsersController from './controllers/users.controller';

angular
  .module('app', ['ui.router'])
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
  .controller('UsersController', UsersController)
;
