'use strict';

var entriesApp = angular.module('myApp.view1', [ 'ngRoute' ]);

entriesApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'EntriesCtrl'
  });
}]);

entriesApp.controller('EntriesCtrl', function($scope, $http) {
  $http.get("http://localhost:8080/entryservice/resources/entries").then(function(response) {
    $scope.entries = response.data;
  });
});