var app = angular.module('myApp', ['ngAnimate', 'ngMaterial', 'ngRoute']);

app.config(
function($routeProvider) {
    $routeProvider.when('/inbox', {
        templateUrl : 'assets/angular/views/inbox.html',
        controller : 'MainCtrl'
    })
    .when('/bundles', {
        templateUrl : 'assets/angular/views/bundles.html',
        controller : 'MainCtrl'
    })

    .otherwise({
         templateUrl : 'assets/angular/views/main.html'
    });
});


