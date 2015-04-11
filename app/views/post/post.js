'use strict';

var postApp = angular.module('myApp.post', ['ngRoute', 'ngSanitize', 'configuration']);

postApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/post/:id', {
        templateUrl: 'views/post/post.html',
        controller: 'PostCtrl'
    });
}]);

postApp.controller('PostCtrl', function ($scope, $http, $routeParams, ENTRY_URL) {
    $http.get(ENTRY_URL + $routeParams.id).then(function (response) {
        $scope.entry = response.data;
        $scope.content = response.data.content;
    });

    $scope.create = function (comment) {
        $http.post(ENTRY_URL + $routeParams.id + '/comments',
            '{"author":"' + comment.author + '", "content":"' + comment.content + '"}')
            .then(function (response) {
                $scope.entry.comments.push(response.data);
            });
    };
});