// ******************
// * Servo control  *
// * Steve Groves   *
// * Feb 2015       *
// ******************

var UI = require('ui');
var ajax = require('ajax');
var url = 'http://192.168.1.87';
var main = new UI.Card({
  title: 'Servo.js',
  body: '\nPress any button'
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
      main.title ('Right ');
      main.body ('\nit worked');
    },
    function(error) 
    {
      // Failure!
      main.title('Failed ' + error);
    }
    );
});

// Move servo arm to the left
main.on('click', 'down', function(e) {
  ajax(
    {
      url: url + '/?S=0',
      type:'post'
    },
    function(data) 
    { 
      main.title('Left ');
      main.body('\nit worked');
    },
    function(error) 
    {
      // Failure!
      main.title('Failed ' + error);
    }
    );
});

// Centre the servo arm
main.on('click', 'select', function(e) {
  ajax(
    {
      url: url + '/?S=-1',
      type:'post'
    },
    function(data) 
    { 
      main.title('Centre ');
      main.body('\nit worked');
    },
    function(error) 
    {
      // Failure!
      main.title('Failed ' + error);
    }
    );
});