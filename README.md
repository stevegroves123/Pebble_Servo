# Pebble_Servo
Pebble_servo control

This is a very simple javascript app that controls a servo connected to an Arduino Uno. The user has three locations on the pebble watch and by selecting one of them moves the servo arm to a defined position.
A cardboard backing has a label for each postion stating the location when I pressed the button. I will change this for a clock face and mount the Arduino Uno, WiFi and servo behind the clock face.

The Uno is using a wifi sheild to connect to a home network, then presents a webpage. The javaScript writes to the webpage by using the "post" command; this changes to the webpage by altering the /S= section of the address. The arduino reads the "/S=  " section and moves the servo based on the s value.
S=-1 moves the servo left (0);
S=0 centres the servo (90);
S=1 moves the servo to the right (180).

https://cloudpebble.net/ide/project/131428#
