/**
 * Created by championswimmer on 3/12/15.
 */
"use strict";
var bedroomModule = angular.module('hi.bedroom', [
    'ui.router'
]);

bedroomModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('bedroom', {
        url: '/bedroom',
        templateUrl: 'app/rooms/bedroom/bedroom.html',
        controller: 'BedroomController'
    });
}]);

bedroomModule.controller('BedroomController',
    ['$mdDialog', '$rootScope', 'SwitchService', function($mdDialog, $rootScope, SwitchService) {

        var brc = this;

        brc.data = {};
        brc.switches = config.bedroom.switches;
        for (var i = 0; i < brc.switches.length; i++) {

            console.log( i + " " + JSON.stringify(brc.switches[i]));
            brc.switches[i].state = false;
        }

        var mySwSrv = SwitchService;
        brc.switchToggle = function (sw) {
          console.log("Switch toggled" + sw.state);
            mySwSrv.setRoom("bedroom");
            mySwSrv.setAppl("led");
            mySwSrv.setState(sw.state ? "off" : "on");
            mySwSrv.performSwitch().then(function (data) {

            }, function (data) {
               window.alert(data);
            });
        };

    }]);