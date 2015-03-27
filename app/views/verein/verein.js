'use strict';

angular.module('myApp.verein', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/verein', {
    templateUrl: 'views/verein/verein.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);