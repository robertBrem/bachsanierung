'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'configuration',
    'myApp.home',
    'myApp.gesetze',
    'myApp.bachprojekte',
    'myApp.elementargefahren',
    'myApp.verein',
    'myApp.post'
])


myApp.config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .otherwise({redirectTo: '/home'});
        }]);