## Usage
With Johnny-Five
``` js
var five = require('johnny-five');
var BeagleBone = require('beaglebone-io');

var board = new five.Board({ 
  io: new BeagleBone()
});

board.on('ready', function () {
  var led = new five.Led();
  led.blink();
  
  this.repl.inject({ led: led });
});
```

## Pin Mappings

BeagleBone Black to Arduino UNO

| BBB Port | Arduino Pin | Type |
|----------|-------------|------|
|P8_7|0|Digital|
|P8_8|1|Digital|
|P8_9|2|Digital|
|P8_13|3|PWM|
|P8_10|4|Digital|
|P9_14|5|PWM|
|P9_16|6|PWM|
|P8_11|7|Digital|
|P8_12|8|Digital|
|P9_21|9|PWM|
|P9_42|10|PWM|
|P8_19|11|PWM|
|P8_14|12|Digital|
|USR3|13|Digital / Default Led|
|P9_39|A0|Analog Input|
|P9_40|A1|Analog Input|
|P9_37|A2|Analog Input|
|P9_38|A3|Analog Input|
|P9_35|A4|Analog Input|
|P9_36|A5|Analog Input|

For I2C:

| BBB Port   | Type     |
| ---------- | -------- |
| P9_20      | I2C SDA  |
| P9_19      | I2C SCL  |