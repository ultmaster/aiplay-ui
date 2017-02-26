import ngMaterial from 'angular-material';
import angular from 'angular';

import AppBarTemplate from './appbar.html';

class AppBarController {

  constructor($scope, $mdSidenav, $mdDialog) {
    this.$mdSidenav = $mdSidenav;
    $scope.currentNavItem = 'page1';
    $scope.toggleLeft = this.buildToggler('left');
    $scope.toggleRight = this.buildToggler('right');
    $scope.showAlert = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('This is an alert title')
          .textContent('You can specify some description text in here.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };

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
