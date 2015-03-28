'use strict';

var adminApp = angular.module('myApp.admin', ['ngRoute']);

adminApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/admin', {
        templateUrl: 'views/admin/admin.html',
        controller: 'AdminCtrl'
    });
}]);

adminApp.controller('AdminCtrl', function ($scope, $http) {
    $scope.create = function(entry) {
        $http.post('http://104.167.98.125:8080/entryservice/resources/entries/',
            '{"title":"' + entry.title + '", "teaser":"' + entry.teaser + '", "content":"' + entry.content + '"}')
            .then(function(response) {
                $scope.created = response.data;
            });
    };
    $scope.delete = function(entry) {
        $http.delete('http://104.167.98.125:8080/entryservice/resources/entries/' + entry.id)
            .then(function(response) {
                $scope.created = response.data;
            });
    };
});