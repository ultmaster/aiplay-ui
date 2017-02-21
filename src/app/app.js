import angular from 'angular';
import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';
import appbar from './appbar/appbar.js';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor() {
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [ngMaterial, appbar])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;