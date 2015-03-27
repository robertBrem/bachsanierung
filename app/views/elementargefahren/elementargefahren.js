'use strict';

var postApp = angular.module('myApp.elementargefahren', [ 'ngRoute' ]);

postApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/elementargefahren', {
    templateUrl: 'views/elementargefahren/elementargefahren.html',
    controller: 'View2Ctrl'
  });
}]);

postApp.controller('View2Ctrl', [function() {

}]);