var five = require("johnny-five");
var BeagleBone = require("beaglebone-io");
var board = new five.Board({
    io: new BeagleBone()
});

var boardReady = false;
var kitchen = {};



board.on("ready", function() {
    boardReady = true;
    kitchen  = new five.Led("P8_7");
});


module.exports = {
	kitchenOn: function() {
		kitchen.on();
	},
	kitchenOff: function () {
		kitchen.off();
	}

};
