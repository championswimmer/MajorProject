"use strict";
// Warning, this is an ES6 Harmony script. Either transpile, or run on compatible runtime.
var arduino = require('./arduinoctrl.js');
var express = require('express');
var colorlist = require('./colors.json');

console.log("Starting AwesomeProj Arduino Version");

var devices = {
    status: {
        led : null
    },
    hall: {
        rgb : null,
        lcd: null
    },
    bedroom: {
        led: null
    },
    guestroom: {
        led: null
    }
};
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/status', (req, res) => {
    let cmd = 'on';
    if (req.query.cmd !== null && req.query.cmd !== undefined) {
        cmd = req.query.cmd;
    }
    if (devices.status.led === null) {
        devices.status.led = arduino.getStatusLed();
    }
    switch (cmd) {
        case 'blink':
            devices.status.led.blink();
            break;
        case 'off':
            devices.status.led.off();
            break;
        default :
            devices.status.led.on();
            break;
    }
});

app.get('/hall/:appl', (req, res) => {
    let response = "Default resp";
    if (req.params.appl === 'rgb' ) {

        if (devices.hall.rgb === null || devices.hall.rgb === undefined) {
            devices.hall.rgb = arduino.getHallRgb();
        }
        switch (req.query.cmd) {
            case 'status':
                response= devices.hall.rgb.color();
                break;
            case 'off':
                devices.hall.rgb.off();
                response= devices.hall.rgb.color();
                break;
            case 'colorhex':
                let col = '#' + req.query.val;
                devices.hall.rgb.color(col);
                response = devices.hall.rgb.color();
                break;
            case 'on':
                devices.hall.rgb.on();
                response= devices.hall.rgb.color();
                break;
            case 'blink':
                devices.hall.rgb.blink();
                response= devices.hall.rgb.color();
                break;
            default:
                let val = req.query.cmd;
                if (typeof colorlist[val.toLowerCase()] != 'undefined') {
                    val = colorlist[val.toLowerCase()];
                    devices.hall.rgb.color(val);
                    response = devices.hall.rgb.color();
                } else {
                    response = 'Invalid color name';
                }
                break;
        }
    }
    if (req.params.appl === 'lcd' ) {
        if (devices.hall.lcd === null || devices.hall.lcd === undefined) {
            devices.hall.lcd = arduino.getHallLcd();
        }
        devices.hall.lcd.print('Hello');
    }
    res.send(response);
});

app.get ('/bedroom/:appl', (req, res) => {
    let response = ('Controlling bedroom appliance');
    if (req.params.appl === 'led' ) {
        if (devices.bedroom.led === null || devices.bedroom.led === undefined) {
            devices.bedroom.led = arduino.getBedLed();
        }

        switch (req.query.cmd) {
            case 'on':
                devices.bedroom.led.fadeIn();
                break;
            case 'off':
                devices.bedroom.led.fadeOut();
                break;
        }
    }
    res.send(response);
});

app.get ('/guestroom/:appl', (req, res) => {
    let response = ('Controlling guestroom appliance');
    if (req.params.appl === 'led' ) {
        if (devices.guestroom.led === null || devices.guestroom.led === undefined) {
            devices.guestroom.led = arduino.getGuestLed();
        }
        switch (req.query.cmd) {
            case 'on':
                devices.guestroom.led.fadeIn();
                break;
            case 'off':
                devices.guestroom.led.fadeOut();
                break;
        }
    }
    res.send(response);

});

var server = app.listen(8888, () => {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
