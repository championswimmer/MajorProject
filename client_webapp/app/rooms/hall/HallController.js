/**
 * Created by championswimmer on 3/12/15.
 */
"use strict";
var hallModule = angular.module('hi.hall', [
    'ui.router'
]);

hallModule.config(['$stateProvider', function($stateProvider) {
    $stateProvider.state('hall', {
        url: '/hall',
        templateUrl: 'app/rooms/hall/hall.html',
        controller: 'HallController'
    });
}]);

hallModule.controller('HallController',
    ['$mdDialog', '$rootScope', 'SwitchService', function($mdDialog, $rootScope, SwitchService) {
        
        var hc = this;
        hc.data = {};
        hc.switches = config.hall.switches;
        for (var i = 0; i < hc.switches.length; i++) {

            console.log( i + " " + JSON.stringify(hc.switches[i]));
            hc.switches[i].state = false;
        }

        hc.color  = {
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
        };

        var mySwSrv = SwitchService;
        hc.switchToggle = function (sw) {
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