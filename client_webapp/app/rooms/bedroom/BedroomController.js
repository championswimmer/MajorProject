/**
 * Created by championswimmer on 3/12/15.
 */
"use strict";
var bedroomModule = angular.module('hi.bedroom', ['ui.router']);

bedroomModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('bedroom', {
        url: '/bedroom',
        templateUrl: 'app/rooms/bedroom/bedroom.html',
        controller: 'BedroomController'
    });
}]);

bedroomModule.controller('BedroomController',
    ['$mdDialog', '$rootScope', function($mdDialog, $rootScope) {

        var brc = this;
        brc.switchToggle = function () {
          console.log("Switch toggled");
        };

    }]);