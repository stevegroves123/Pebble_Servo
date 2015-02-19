# Pebble_Servo
Pebble_servo control

This is a very simple javascript app that controls a servo connected to an Arduino Uno. It uses the three buttons on the pebble watch to move the servo arm to a defined position.
A cordboard bocking has a label for each postion stating the location I was at when I pressed the button.

The Uno is using a wifi sheild to connect to a home network, then presents a webpage. The javaScript writes to the webpage by using the "post" command; this changes to the webpage by altering the /S= section of the address.
S=-1 moves the servo left
S=0 centres the servo
S=1 moves the servo to the right
