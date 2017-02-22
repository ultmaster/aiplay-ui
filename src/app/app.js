import ngMaterial from 'angular-material';
import angular from 'angular';
import ngRoute from 'angular-route';
import 'angular-material/angular-material.css';

// import AppHtml from './app.html';
import AppBar from './appbar/appbar.js';

let App = () => {
  return {
    template: '<app-bar></app-bar>',
    controller: AppCtrl
  }
};

let app = angular.module('app', [ngMaterial, ngRoute]);
app.directive('app', App);
app.directive('appBar', AppBar);
app.controller('AppCtrl', AppCtrl);

function AppCtrl($scope) {
  $scope.currentNavItem = 'page1';
}
//
// app.config(function($mdThemingProvider){
//   // Update the theme colors to use themes on font-icons
//   // $mdThemingProvider.theme('default')
//   //   .primaryPalette("red")
//   //   .accentPalette('green')
//   //   .warnPalette('blue');
// });

app.config(function($routeProvider) {
  $routeProvider
    .when("/banana", {
      template : "<h1>Banana</h1><p>Bananas contain around 75% water.</p>"
    })
    .when("/tomato", {
      template : "<h1>Tomato</h1><p>Tomatoes contain around 95% water.</p>"
    })
    .otherwise({
      template : "<h1>None</h1><p>Nothing has been selected</p>"
    });
});

