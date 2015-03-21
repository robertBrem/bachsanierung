'use strict';

var postApp = angular.module('myApp.post', [ 'ngRoute' ]);

postApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/post', {
    templateUrl: 'views/post/post.html',
    controller: 'PostCtrl'
  });
}]);

postApp.controller('PostCtrl', function($scope, $http) {
  $http.get("http://localhost:8080/entryservice/resources/entries/1").then(function(response) {
    $scope.entry = response.data;
  });
});