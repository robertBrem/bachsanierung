'use strict';

var postApp = angular.module('myApp.post', ['ngRoute']);

postApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/post/:id', {
        templateUrl: 'views/post/post.html',
        controller: 'PostCtrl'
    });
}]);

postApp.controller('PostCtrl', function ($scope, $http, $routeParams) {
    $http.get("http://104.167.98.125:8080/entryservice/resources/entries/" + $routeParams.id).then(function (response) {
        $scope.entry = response.data;
    });
});