/**
 * Welcome to Pebble.js!
 */

var UI = require('ui');
var Vibe =  require('ui/vibe');
var URLeft = 'http://192.168.1.87/?S=0';

var main = new UI.Card({
  title: 'Servo.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Servo World!',
  body: 'Press any button to control the Servo'
});
main.show();

main.on('click', 'up', function(e) {
ajax(
  {
    url: URLeft,
    type: 'post'
  },
  function(data) {
    // Success!
    console.log('Servo moved to the Left!');
    Vibe.vibrate('short');
  },
  function(error) {
    // Failure!
    console.log('Failed to move servo: OMG!! ' + error);
  }
);
});