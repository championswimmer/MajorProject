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
        brc.data = {light: false};

        var mySwSrv = SwitchService;
        brc.switchToggle = function () {
          console.log("Switch toggled" + brc.data.light);
            mySwSrv.setRoom("bedroom");
            mySwSrv.setAppl("led");
            mySwSrv.setState(brc.data.light ? "off" : "on");
            mySwSrv.performSwitch().then(function (data) {

            }, function (data) {
               window.alert(data);
            });
        };

    }]);