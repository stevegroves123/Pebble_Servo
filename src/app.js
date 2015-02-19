// ******************
// * Servo control  *
// * Steve Groves   *
// * Feb 2015       *
// ******************

var UI = require('ui');
var ajax = require('ajax');
// Web facing IP address for home BT system
var url = 'http://86.186.13.138';
var main = new UI.Card({
  title: 'Servo.js',
  subtitle: 'Stevie G',
  body: '\nPress button to indicate location'
});

main.show();

// Move servo arm to the right
  main.on('click', 'up', function(e) {
    ajax(
    {
      url: url + '/?S=1',
      type:'post'
    },
    function(data) 
    { 
      console.log("Servo moved to Car");
      main.title ('Car :) ');
      main.body ('\nNearly there');
      
    },
    function(error) 
    {
      // Failure!
      main.title('Failed check web page');
      console.log('Did not work - Car');
      main.hide ();
    });
});
  
  main.on ('click','down', function(e) {
    ajax(
    {
      url: url + '/?S=0',
      type:'post'
    },
    function(data) 
    { 
      // success
      console.log("Servo moved to DMK");
      main.title('Denmark Hill');
      main.body('\nStarting journey');
    },
    function(error) 
    {
      // Failure!
      main.title('Something went wrong ');
      console.log('Did not work - DMK');
      main.hide ();
    });
  });
  
  main.on ('click','select', function(e) {
    ajax(
    {
      url: url + '/?S=-1',
      type:'post'
    },
    function(data) 
    { 
      // success
      console.log("Servo moved to Bromley South");
      main.title('Bromley South ');
      main.body('\nHalf way home');
    },
    function(error) 
    {
      // Failure!
      main.title('It\'s a trap!');
      console.log('Did not work - Bromley South');
      main.hide ();
    });
  });