'use strict';

angular.module('myApp.gesetze', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/gesetze', {
            templateUrl: 'views/gesetze/gesetze.html',
            controller: 'View2Ctrl'
        });
    }])

    .controller('View2Ctrl', [function() {

    }]);