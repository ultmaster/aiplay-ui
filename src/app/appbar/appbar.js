import ngMaterial from 'angular-material';
import angular from 'angular';

import AppBarTemplate from './appbar.html';

class AppBarController {

  constructor($scope, $mdSidenav) {
    this.$mdSidenav = $mdSidenav;
    $scope.currentNavItem = 'page1';
    $scope.toggleLeft = this.buildToggler('left');
    $scope.toggleRight = this.buildToggler('right');
  }

  buildToggler(componentId) {

    return () => {
      console.log('fck');
      this.$mdSidenav(componentId).toggle();
    };
  }
}

function AppBar() {
  return {
    scope: {
      name: '@'
    },
    controller: AppBarController,
    controllerAs: 'ctrl',
    bindToController: true,
    replace: true,
    template: AppBarTemplate
  }
}

export default AppBar;
