/**
 * Created by championswimmer on 3/12/15.
 */
"use strict";
var guestroomModule = angular.module('hi.guestroom', ['ui.router']);

guestroomModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('guestroom', {
        url: '/guestroom',
        templateUrl: 'app/rooms/guestroom/guestroom.html',
        controller: 'GuestroomController'
    });
}]);

guestroomModule.controller('GuestroomController',
    ['$mdDialog', '$rootScope', function($mdDialog, $rootScope) {

    }]);