'use strict';

angular.module('myApp.bachprojekte', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bachprojekte', {
    templateUrl: 'views/bachprojekte/bachprojekte.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);