var app = angular.module('app', ['ngMaterial']);

app.controller('AppCtrl', AppCtrl);

function AppCtrl($scope) {
  $scope.currentNavItem = 'page1';

}

app.config(function($mdThemingProvider){
  // Update the theme colors to use themes on font-icons
  // $mdThemingProvider.theme('default')
  //   .primaryPalette("red")
  //   .accentPalette('green')
  //   .warnPalette('blue');
});

app.controller('NavController', function($scope, $location) {

    // Public.
    // "navItems"存储着导航栏的栏目。
    $scope.navItems = [
      {
        title: 'Home',
        locationUrl: '/',
        href: '/app/index.html#' + '/'
      },
      {
        title: 'About Me',
        locationUrl: '/aboutMe',
        href: '/app/index.html#' + '/aboutMe'
      },
      {
        title: 'Management',
        locationUrl: '/manageHome',
        href: '/app/index.html#' + '/manageHome'
      },
    ]
    // .selectedNavItem变量存储当前选择项，默认的选择项是"Home"。
    $scope.selectedNavItem = 'Home'
    // 栏目click时触发的方法。
    $scope.itemClick = function(itemTitle) {
      $scope.selectedNavItem = itemTitle
    }
    // 初始化。
    // 判断当前地址栏路径属于哪个导航栏目。
    var currentLocation = $location.path()
    for (var i = 0, len = $scope.navItems.length; i < len; i++) {
      var navItem = $scope.navItems[i]
      if (currentLocation == navItem.locationUrl) {
        $scope.selectedNavItem = navItem.title
      }
    }
  });
