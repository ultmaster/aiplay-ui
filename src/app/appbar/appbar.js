import angular from 'angular';
import ngMaterial from 'angular-material';

let appbar = () => {
  return {
    template: require('./appbar.html'),
    controller: 'AppbarController',
    controllerAs: 'appbar'
  }
};

class AppbarController {
  constructor() {
    this.title = 'My App Title';
  }
}

const MODULE_NAME = 'appbar';

angular.module(MODULE_NAME, [ngMaterial])
  .directive('appbar', appbar)
  .controller('AppbarController', AppbarController);

export default MODULE_NAME;