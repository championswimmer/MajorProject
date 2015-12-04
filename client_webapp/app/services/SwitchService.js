/**
 * Created by championswimmer on 3/12/15.
 */
"use strict";
var serviceHandler = angular.module('homeiot');

serviceHandler.service('SwitchService', [ '$http', '$q', function($http, $q) {
    var baseUrl = "http://localhost:8888";
    var _room = '';
    var _appl = '';
    var _state = '';

    var joinUrl = function() {
        return baseUrl + '/' + _room + '/' + _appl + '?cmd=' + _state;
    };

    this.setRoom = function (room) {
        _room = room;
    };
    this.setAppl = function (appl) {
        _appl = appl;
    };
    this.setState = function (state) {
        _state = state;
    };

    this.performSwitch  = function() {
        var switchUrl = joinUrl();
        var deferred = $q.defer();
        $http({
            method: "GET",
            url: switchUrl
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function() {
            deferred.reject("Error in switching");
        });
        // Seriously WTF is this shit. Javascript sucks donkey balls.
        // This is no way to code a language worth it's salt. Ugggghh.
        // Promises my shit. They are meant to be broken.
        return deferred.promise;
    };
}]);

serviceHandler.service('RGBService', [ '$http', '$q', function($http, $q) {
    var _colorhex = 'ffffff'
    var _room = '';
    var _appl = '';
    var baseUrl = "http://localhost:8888";

    var joinUrl = function() {
        return baseUrl + '/' + _room + '/' + _appl + '?cmd=' + 'colorhex' + '&val=' + _colorhex;
    };

    this.setRoom = function (room) {
        _room = room;
    };
    this.setAppl = function (appl) {
        _appl = appl;
    };
    this.setColor = function (red, green, blue) {
        _colorhex = rgbToHex(red, green, blue);
    };

    this.performSwitch  = function() {
        var switchUrl = joinUrl();
        var deferred = $q.defer();
        $http({
            method: "GET",
            url: switchUrl
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function() {
            deferred.reject("Error in switching");
        });
        // Seriously WTF is this shit. Javascript sucks donkey balls.
        // This is no way to code a language worth it's salt. Ugggghh.
        // Promises my shit. They are meant to be broken.
        return deferred.promise;
    };

}]);

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}