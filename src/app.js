/**
 * Welcome to Pebble.js!
 */

var UI = require('ui');
var URLup = 'https://www.google.co.uk/?gws_rd=ssl';

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
    url: URLup,
    method: 'get',
    type: 'text'
  },
  function(success) {
    // Success!
    var return_page = new UI.Card ({
      title:'result ',
      body: success});
    return_page.show ();
    console.log('Servo moved to the Left!');
  },
  function(error) {
    // Failure!
    var error_page = new UI.Card ({
      title: 'failure ',
      body: 'oh dear :('});
    error_page.show ();
    console.log('Failed to move servo: OMG!! ' + error);
  }
);
});
