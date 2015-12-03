/**
 * Created by championswimmer on 3/12/15.
 */
"use strict";
var switchService = angular.module('hi.switch', []);

switchService.service('switchService', function($http, $q) {
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

        return deferred.promise;
        // Seriously WTF is this shit. Javascript sucks donkey balls.
        // This is no way to code a language worth it's salt. Ugggghh.
        // Promises my shit. They are meant to be broken.

    };
});