/**
 * Created by championswimmer on 3/12/15.
 */
"use strict";
var guestroomModule = angular.module('hi.guestroom', [
    'ui.router'
]);

guestroomModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('guestroom', {
        url: '/guestroom',
        templateUrl: 'app/rooms/guestroom/guestroom.html',
        controller: 'GuestroomController'
    });
}]);

guestroomModule.controller('GuestroomController',
    ['$mdDialog', '$rootScope', 'SwitchService', function($mdDialog, $rootScope, SwitchService) {
        
        var grc = this;

        grc.data = {};
        grc.switches = config.guestroom.switches;
        for (var i = 0; i < grc.switches.length; i++) {

            console.log( i + " " + JSON.stringify(grc.switches[i]));
            grc.switches[i].state = false;
        }

        var mySwSrv = SwitchService;
        grc.switchToggle = function (sw) {
            console.log("Switch toggled" + sw.state);
            mySwSrv.setRoom("guestroom");
            mySwSrv.setAppl("led");
            mySwSrv.setState(sw.state ? "off" : "on");
            mySwSrv.performSwitch().then(function (data) {

            }, function (data) {
                window.alert(data);
            });
        };

    }]);