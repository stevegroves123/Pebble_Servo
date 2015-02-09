/**
 * Welcome to Pebble.js!
 */

var UI = require('ui');
var Vibe =  require('ui/vibe');
var URLeft = 'http://www.bbc.co.uk';

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
    method: 'push',
    type: 'text'
  },
  function(data) {
    // Success!
    Vibe.vibrate('short');
    console.log('Servo moved to the Left!');
  },
  function(error) {
    // Failure!
    Vibe.vibrate ('long');
    console.log('Failed to move servo: OMG!! ' + error);
  }
);
});
