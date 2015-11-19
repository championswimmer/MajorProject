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
    },
    getBedLed() {
        return new five.Led(pinConfig.LED_bed.Vin);
    },
    getGuestLed() {
        return new five.Led(pinConfig.LED_guest.Vin);
    },
    getHallLcd() {
        return new five.LCD({
            pins: [
                pinConfig.LCD_Hall.RS,
                pinConfig.LCD_Hall.EN,
                pinConfig.LCD_Hall.D4,
                pinConfig.LCD_Hall.D5,
                pinConfig.LCD_Hall.D6,
                pinConfig.LCD_Hall.D7
            ]
        });
    }
};