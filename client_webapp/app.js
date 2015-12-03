"use strict";

var homeiot = angular.module('homeiot',
    [
        'ui.router',
        'ngMaterial',
        'hi.hall',
        'hi.bedroom',
        'hi.guestroom'
    ]);

homeiot.config(['$urlRouterProvider', '$httpProvider', '$mdThemingProvider',
    function($urlRouterProvider, $httpProvider, $mdThemingProvider) {

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $urlRouterProvider.otherwise('hall');

        //$mdThemingProvider.theme('default')
        //    .primaryPalette(config.themeColorPrimary)
        //    .accentPalette(config.themeColorAccent);
    }]);

homeiot.controller('AppController',
    [ '$mdSidenav', '$mdMedia', function($mdSidenav, $mdMedia) {
        var app = this;
        app.config = config;
    }]);