/**
 * Created by championswimmer on 3/12/15.
 */
"use strict";
var hallModule = angular.module('hi.hall', ['ui.router']);

hallModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('hall', {
        url: '/hall',
        templateUrl: 'app/rooms/hall/hall.html',
        controller: 'HallController'
    });
}]);

hallModule.controller('HallController',
    ['$mdDialog', '$rootScope', function($mdDialog, $rootScope) {

    }]);