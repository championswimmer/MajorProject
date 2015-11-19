"use strict";
var five = require("johnny-five");
var board = new five.Board();
var pinConfig = require('./pin_connections');

var boardReady = false;
console.log("Loading module arduinoctrl");

board.on('ready', () => {
    boardReady = true;
});

module.exports = {
    getStatusLed() {
        return new five.Led(13);
    },
    getHallRgb() {
        return new five.Led.RGB({
            pins: {
                red: pinConfig.RGB_Hall.R,
                green: pinConfig.RGB_Hall.G,
                blue: pinConfig.RGB_Hall.B
            }
        });

    }
};