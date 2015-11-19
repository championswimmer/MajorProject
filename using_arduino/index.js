"use strict";
var arduino = require('./arduinoctrl.js');
var express = require('express');

console.log("Starting AwesomeProj Arduino Version");

var hallRgb;

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/status', (req, res) => {
    let cmd = 'on';
    if (req.query.cmd !== null && req.query.cmd !== undefined) {
        cmd = req.query.cmd;
    }
    let statusLed = arduino.getStatusLed();
    switch (cmd) {
        case 'blink':
            statusLed.blink();
            break;
        case 'off':
            statusLed.off();
            break;
        default :
            statusLed.on();
            break;
    }
});

app.get('/hall/:appl', (req, res) => {
    let response = "Default resp";
    if (req.params.appl === 'rgb' ) {

        if (hallRgb === null || hallRgb === undefined) {
            hallRgb = arduino.getHallRgb();
        }
        switch (req.query.cmd) {
            case 'status':
                response= hallRgb.color();
                break;
            case 'off':
                hallRgb.off();
                break;
            case 'blue':
                hallRgb.color('#0000ff');
                break;
            case 'green':
                hallRgb.color('#00ff00');
                break;
            case 'red':
                hallRgb.color('#ff0000');
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
